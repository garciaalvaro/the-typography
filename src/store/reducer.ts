import { remove, uniq } from "lodash";
import produce from "immer";

import {
	is_customizer,
	generateDefaultTypography,
	generateDefaultSelector,
	generateDefaultSelectorGroup
} from "utils/data";
import { isVisible } from "utils/tools";

const initial_state: State = {
	single: generateDefaultTypography(),
	has_changed_single: false,
	tab_open: "typographies",
	view: "index",
	current_page: 0,
	reached_last_page: false,
	is_loading: true,
	previewer_page_data: {
		post_type: "",
		template: "index",
		is_404: false,
		is_front_page: false
	},
	typographies: [],
	taxonomies: {},
	fonts: [],
	downloaded_fonts: []
};

export const reducer = (state = initial_state, action: Actions): State => {
	switch (action.type) {
		/**
		 * Fonts
		 */
		case "SET_FONTS_LOADED": {
			return {
				...state,
				fonts: produce(state.fonts, draft =>
					action.payload.forEach(({ family, variants }) => {
						const font = draft.find(font => font.family === family);

						if (!font) {
							return;
						}

						font.variants_loaded = uniq([...variants, ...font.variants_loaded]);
					})
				)
			};
		}

		/**
		 * Navigation
		 */
		case "SET_PREVIEWER_PAGE_DATA": {
			return {
				...state,
				previewer_page_data: action.payload,
				typographies: state.typographies.map(typography => ({
					...typography,
					is_visible: isVisible(typography, action.payload)
				})),
				single: {
					...state.single,
					is_visible: isVisible(state.single, action.payload)
				}
			};
		}
		case "OPEN_TAB": {
			return {
				...state,
				tab_open: action.payload
			};
		}
		case "SET_VIEW": {
			return {
				...state,
				view: action.payload
			};
		}
		case "SET_LOADING": {
			return {
				...state,
				is_loading: action.payload
			};
		}
		case "INCREASE_CURRENT_PAGE": {
			return {
				...state,
				current_page: state.current_page + 1
			};
		}
		case "SET_REACHED_LAST_PAGE": {
			return {
				...state,
				reached_last_page: action.payload
			};
		}

		/**
		 * Taxonomies
		 */
		case "SET_TAXONOMIES": {
			return {
				...state,
				taxonomies: {
					...state.taxonomies,
					...action.payload
				}
			};
		}
		case "ADD_TAXONOMY_TERM": {
			const { taxonomy_name, term } = action.payload;

			return {
				...state,
				taxonomies: {
					...state.taxonomies,
					[taxonomy_name]: [...state.taxonomies[taxonomy_name], term]
				}
			};
		}

		/**
		 * Typographies
		 */
		case "REMOVE_TYPOGRAPHY": {
			// Here we don't remove the fonts that the typography used.
			// This way we can keep track of which fonts are already loaded.
			return {
				...state,
				typographies: state.typographies.filter(
					({ id }) => id !== action.payload
				)
			};
		}
		case "SET_TYPOGRAPHY_ACTIVE": {
			const { id, value } = action.payload;

			return {
				...state,
				typographies: state.typographies.map(typography => ({
					...typography,
					is_active: typography.id === id ? value : typography.is_active
				}))
			};
		}
		case "ADD_TYPOGRAPHIES": {
			let typographies_new;
			// In case there are typographies which are already present we filter them
			typographies_new = action.payload.filter(
				({ id }) => !state.typographies.find(typography => typography.id === id)
			);

			// If its customizer add the visibility
			if (is_customizer) {
				typographies_new = typographies_new.map(typography => ({
					...typography,
					is_visible: isVisible(typography, state.previewer_page_data)
				}));
			}

			const fonts_to_add = action.payload
				.filter(({ custom_font, font_family }) => custom_font && font_family)
				.map(({ font_family, font_variant }) => ({
					family: font_family,
					variants: font_variant
				}));

			const fonts_new = produce(state.fonts, draft =>
				fonts_to_add.forEach(({ family, variants }) => {
					const font = draft.find(font => font.family === family);

					if (font) {
						font.variants = uniq([...variants, ...font.variants]);

						return;
					}

					draft.push({ family, variants, variants_loaded: [] });
				})
			);

			return {
				...state,
				fonts: fonts_new,
				typographies: [...state.typographies, ...typographies_new]
			};
		}
		case "UPDATE_TYPOGRAPHY": {
			const index = state.typographies.findIndex(
				typography => typography.id === action.payload
			);
			const new_single = {
				...state.single,
				id: action.payload
			};

			return {
				...state,
				has_changed_single: false,
				single: new_single,
				typographies:
					index === -1
						? [new_single, ...state.typographies]
						: produce(state.typographies, draft_typographies => {
								draft_typographies[index] = new_single;
						  })
			};
		}

		/**
		 * Single
		 */
		case "UNDO_SINGLE": {
			const { single, typographies, previewer_page_data } = state;
			const typography = typographies.find(({ id }) => id === single.id);

			return {
				...state,
				has_changed_single: false,
				single: typography
					? {
							...typography,
							is_visible: isVisible(typography, previewer_page_data)
					  }
					: generateDefaultTypography()
			};
		}
		case "SET_HAS_CHANGED_SINGLE": {
			return {
				...state,
				has_changed_single: action.payload
			};
		}
		case "LOAD_SINGLE": {
			const typography = state.typographies.find(
				({ id }) => id === action.payload
			);

			return {
				...state,
				view: "single",
				has_changed_single: false,
				single: typography ? typography : generateDefaultTypography()
			};
		}
		case "RESET_SINGLE": {
			return {
				...state,
				single: generateDefaultTypography()
			};
		}
		case "RESET_SINGLE_STYLE": {
			return {
				...state,
				single: {
					...state.single,
					...state.single._typography_style_defaults
				}
			};
		}
		case "SET_PROP": {
			const { single, previewer_page_data } = state;
			const { prop_key, prop_value, group_id, selector_id } = action.payload;

			if (
				prop_key === "context_type" ||
				prop_key === "context_post_type" ||
				prop_key === "context_post_type_template"
			) {
				const single_new = {
					...single,
					[prop_key]: prop_value
				};

				return {
					...state,
					has_changed_single: true,
					single: {
						...single_new,
						is_visible: isVisible(single_new, previewer_page_data)
					}
				};
			}

			if (!group_id && !selector_id) {
				let fonts_new = state.fonts;

				if (["font_family", "font_variant"].includes(prop_key)) {
					fonts_new = produce(state.fonts, draft => {
						const { font_family, font_variant } = state.single;
						const family =
							prop_key === "font_family" ? prop_value : font_family;
						const variants =
							prop_key === "font_variant" ? prop_value : font_variant;

						const font = draft.find(font => font.family === family);

						if (font) {
							font.variants = uniq([...variants, ...font.variants]);

							return;
						}

						draft.push({ family, variants, variants_loaded: [] });
					});
				}

				return {
					...state,
					fonts: fonts_new,
					has_changed_single: true,
					single: {
						...single,
						[prop_key]: prop_value
					}
				};
			}

			return {
				...state,
				has_changed_single: true,
				single: {
					...single,
					selector_groups: produce(single.selector_groups, draft_groups => {
						const group = draft_groups.find(group => group.id === group_id);

						if (!group) {
							return;
						}

						if (!selector_id) {
							// @ts-ignore TODO
							group[prop_key as keyof SelectorGroup] = prop_value;

							return;
						}

						const selector = group.selectors.find(
							selector => selector.id === selector_id
						);

						if (!selector) {
							return;
						}

						// @ts-ignore TODO
						selector[prop_key as keyof Selector] = prop_value;
					})
				}
			};
		}
		case "RESET_SELECTOR_GROUP_STYLE": {
			return {
				...state,
				single: {
					...state.single,
					selector_groups: produce(
						state.single.selector_groups,
						draft_groups => {
							const index = draft_groups.findIndex(
								group => group.id === action.payload
							);

							if (index === -1) {
								return;
							}

							draft_groups[index] = {
								...draft_groups[index],
								...draft_groups[index]._typography_style_defaults
							};
						}
					)
				}
			};
		}
		case "ADD_SELECTOR": {
			return {
				...state,
				has_changed_single: true,
				single: {
					...state.single,
					selector_groups: produce(
						state.single.selector_groups,
						draft_groups => {
							const group = draft_groups.find(
								group => group.id === action.payload
							);

							if (!group) {
								return;
							}

							group.selectors.unshift(generateDefaultSelector());
						}
					)
				}
			};
		}
		case "ADD_SELECTOR_GROUP": {
			return {
				...state,
				has_changed_single: true,
				single: {
					...state.single,
					selector_groups: [
						generateDefaultSelectorGroup(),
						...state.single.selector_groups
					]
				}
			};
		}
		case "REMOVE_SINGLE_SELECTOR": {
			const { group_id, selector_id } = action.payload;

			return {
				...state,
				has_changed_single: true,
				single: {
					...state.single,
					selector_groups: produce(
						state.single.selector_groups,
						draft_groups => {
							const group = draft_groups.find(group => group.id === group_id);

							if (!group) {
								return;
							}

							remove(group.selectors, ({ id }) => id === selector_id);
						}
					)
				}
			};
		}
		case "REMOVE_SINGLE_SELECTOR_GROUP": {
			return {
				...state,
				has_changed_single: true,
				single: {
					...state.single,
					selector_groups: produce(
						state.single.selector_groups,
						draft_groups => {
							remove(draft_groups, ({ id }) => id === action.payload);
						}
					)
				}
			};
		}

		/**
		 * Downloaded Fonts
		 */
		case "SET_DOWNLOADED_FONTS": {
			return {
				...state,
				downloaded_fonts: action.payload
			};
		}
		case "ADD_DOWNLOADED_FONT": {
			return {
				...state,
				downloaded_fonts: [...state.downloaded_fonts, action.payload]
			};
		}
		case "REMOVE_DOWNLOADED_FONT": {
			return {
				...state,
				downloaded_fonts: state.downloaded_fonts.filter(
					({ value }) => value !== action.payload
				)
			};
		}

		default:
			return state;
	}
};
