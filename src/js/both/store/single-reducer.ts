import l, { selector_group_defaults, selector_defaults } from "src/js/both/utils";
import produce from "immer";
import uuid from "uuid/v4";

const { remove, isUndefined, forOwn } = lodash;
const initial_state: State["single"] = {
	typography: null,
	typography_unmodified: null,
	changed: false
};

const reducer = (
	state = initial_state,
	action:
		| Actions["resetProps"]
		| Actions["resetSelectorGroupProps"]
		| Actions["updateSingleVisibility"]
		| Actions["emptySingle"]
		| Actions["resetSingle"]
		| Actions["updateChanged"]
		| Actions["loadSingle"]
		| Actions["updateProp"]
		| Actions["updateSelectorProp"]
		| Actions["updateSelectorGroupProp"]
		| Actions["addSelector"]
		| Actions["addSelectorGroup"]
		| Actions["removeSelector"]
		| Actions["removeSelectorGroup"]
) => {
	return produce(state, draft => {
		switch (action.type) {
			case "UPDATE_SINGLE_VISIBILITY": {
				const { typography } = draft;
				const { is_404, is_front_page, post_type, template } = action.page_data;

				if (!typography) {
					return;
				}
				// If single is not open
				if (isUndefined(typography.is_visible)) {
					return;
				}
				if (typography.context_type === "all_site") {
					typography.is_visible = true;
					return;
				}
				if (typography.context_type === "404_page" && is_404) {
					typography.is_visible = true;
					return;
				}
				if (typography.context_type === "front_page" && is_front_page) {
					typography.is_visible = true;
					return;
				}

				if (
					post_type &&
					typography.context_type === "post_type" &&
					typography.context_post_type.includes(post_type) &&
					typography.context_post_type_template.includes(template)
				) {
					typography.is_visible = true;
					return;
				}

				typography.is_visible = false;
				return;
			}
			case "EMPTY_SINGLE": {
				draft.typography = null;
				draft.typography_unmodified = null;
				draft.changed = false;
				return;
			}
			case "RESET_SINGLE": {
				draft.typography = draft.typography_unmodified;
				return;
			}
			case "UPDATE_CHANGED": {
				draft.changed = action.changed;
				return;
			}
			case "LOAD_SINGLE": {
				draft.typography = action.typography;
				draft.typography_unmodified = action.typography;
				return;
			}
			case "RESET_PROPS": {
				if (!draft.typography) {
					return;
				}

				forOwn(action.values, (value, key) => {
					// @ts-ignore
					if (isUndefined(draft.typography[key])) {
						return;
					}

					// @ts-ignore
					draft.typography[key] = value;
				});

				return;
			}
			case "RESET_SELECTOR_GROUP_PROPS": {
				if (!draft.typography) {
					return;
				}

				const group = draft.typography.selector_groups.find(
					({ id }) => id === action.id
				);

				if (!group) {
					return;
				}

				forOwn(action.values, (value, key) => {
					// @ts-ignore
					if (isUndefined(group[key])) {
						return;
					}

					// @ts-ignore
					group[key] = value;
				});

				return;
			}
			case "UPDATE_PROP": {
				if (!draft.typography) {
					return;
				}

				draft.typography[action.prop] = action.value;
				return;
			}
			case "UPDATE_SELECTOR_PROP": {
				if (!draft.typography) {
					return;
				}

				const group = draft.typography.selector_groups.find(
					({ id }) => id === action.parent_id
				);

				if (!group) {
					return;
				}

				const selector = group.selectors.find(({ id }) => id === action.id);

				if (!selector) {
					return;
				}

				selector[action.prop] = action.value;
				return;
			}
			case "UPDATE_SELECTOR_GROUP_PROP": {
				if (!draft.typography) {
					return;
				}

				const group = draft.typography.selector_groups.find(
					({ id }) => id === action.id
				);

				if (!group) {
					return;
				}

				group[action.prop] = action.value;
				return;
			}
			case "ADD_SELECTOR": {
				if (!draft.typography) {
					return;
				}

				const group = draft.typography.selector_groups.find(
					({ id }) => id === action.parent_id
				);

				if (!group) {
					return;
				}

				const defaults: Selector = { ...selector_defaults, id: uuid() };

				group.selectors.unshift(defaults);
				return;
			}
			case "ADD_SELECTOR_GROUP": {
				if (!draft.typography) {
					return;
				}

				const defaults = { ...selector_group_defaults, id: uuid() };

				draft.typography.selector_groups.unshift(defaults);
				return;
			}
			case "REMOVE_SELECTOR": {
				if (!draft.typography) {
					return;
				}

				const group = draft.typography.selector_groups.find(
					({ id }) => id === action.parent_id
				);

				if (!group) {
					return;
				}

				remove(group.selectors, ({ id }) => id === action.id);
				return;
			}
			case "REMOVE_SELECTOR_GROUP": {
				if (!draft.typography) {
					return;
				}

				remove(draft.typography.selector_groups, ({ id }) => id === action.id);
				return;
			}
		}
	});
};

export default reducer;
