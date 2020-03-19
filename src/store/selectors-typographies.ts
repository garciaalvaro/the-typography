import { reverse, keys, pick } from "lodash";

import {
	generateDefaultTypographyStyle,
	generateDefaultSelectorGroupStyle
} from "utils/data/defaults";

const typography_style_keys = keys(
	generateDefaultTypographyStyle()
) as (keyof TypographyStyle)[];

const selector_group_style_keys = keys(
	generateDefaultSelectorGroupStyle()
) as (keyof SelectorGroupStyle)[];

const getTypography = (state: State, typography_id?: Typography["id"]) => {
	const { single, typographies } = state;

	return !typography_id || typography_id === single.id
		? single
		: typographies.find(typography => typography.id === typography_id);
};

export const selectors_typographies: SelectorsTypographies = {
	getParentSelector: (state, { typography_id, group_id }) => {
		const typography = getTypography(state, typography_id);

		if (!typography) {
			return "";
		}

		const group = typography.selector_groups.find(
			group => group.id === group_id
		);

		if (!group) {
			return "";
		}

		return group.custom_parent_selector ? group.parent_selector : "";
	},
	getSelectors: (state, { typography_id, group_id }) => {
		const typography = getTypography(state, typography_id);

		if (!typography) {
			return [];
		}

		const group = typography.selector_groups.find(
			group => group.id === group_id
		);

		if (!group) {
			return [];
		}

		return group.selectors.map(
			({
				block_name,
				block_selector_root,
				block_selector_extra,
				text_selector
			}) =>
				block_name
					? `${block_selector_root}${
							block_selector_extra
								? " " + block_selector_extra
								: ""
					  }`
					: text_selector
		);
	},
	getForceStyles: (state, { typography_id, group_id }) => {
		const typography = getTypography(state, typography_id);

		if (!typography) {
			return false;
		}

		const group = typography.selector_groups.find(
			group => group.id === group_id
		);

		if (!group) {
			return false;
		}

		return group.force_styles;
	},
	isPredefined: (state, id) => {
		const typography = state.typographies.find(
			typography => typography.id === id
		);

		if (!typography) {
			return false;
		}

		return typography._namespace !== "";
	},
	getVisibleIds: state => {
		const { typographies, single, view } = state;

		const typographies_with_single = typographies
			.map(typography =>
				typography.id === single.id ? single : typography
			)
			.filter(({ is_visible, is_active }) => is_visible && is_active);

		if (view === "single" && !single.id) {
			typographies_with_single.unshift(single);
		}

		return typographies_with_single.map(({ id, selector_groups }) => ({
			typography_id: id,
			groups_id: selector_groups.map(({ id }) => id)
		}));
	},
	getTypographies: (state, reversed = false) => {
		const { typographies } = state;

		if (!reversed) {
			return typographies;
		}

		return reverse([
			...typographies.map(typography => ({
				...typography,
				selector_groups: reverse([...typography.selector_groups])
			}))
		]);
	},
	getColorProps: (state, payload = {}) => {
		const { typography_id, group_id } = payload;
		const typography = getTypography(state, typography_id);

		if (!typography) {
			return null;
		}

		if (!group_id) {
			return pick(typography, ["custom_color", "color"]);
		}

		const group = typography.selector_groups.find(
			group => group.id === group_id
		);

		if (!group) {
			return null;
		}

		return pick(group, ["custom_color", "color"]);
	},
	getStyleProps: (state, payload = {}) => {
		const { typography_id, group_id } = payload;
		const typography = getTypography(state, typography_id);

		if (!typography) {
			return null;
		}

		if (!group_id) {
			return pick(typography, typography_style_keys);
		}

		const group = typography.selector_groups.find(
			group => group.id === group_id
		);

		if (!group) {
			return null;
		}

		return pick(group, selector_group_style_keys);
	},
	getSelectorGroups: (state, typography_id) => {
		const typography = getTypography(state, typography_id);

		if (!typography) {
			return null;
		}

		return typography.selector_groups;
	},
	getTitle: (state, typography_id) => {
		const typography = getTypography(state, typography_id);

		if (!typography) {
			return null;
		}

		return typography.title;
	},
	getTypographyStyleDefaults: (state, { typography_id, group_id }) => {
		const typography = getTypography(state, typography_id);

		if (!typography) {
			return null;
		}

		if (!group_id) {
			return typography._typography_style_defaults;
		}

		const group = typography.selector_groups.find(
			group => group.id === group_id
		);

		if (!group) {
			return null;
		}

		return group._typography_style_defaults;
	},
	getPredefinedProps: (state, typography_id) => {
		const typography = getTypography(state, typography_id);

		if (!typography) {
			return null;
		}

		const { _description, _namespace, _namespace_title } = typography;

		return {
			_description,
			_namespace,
			_namespace_title
		};
	},
	getFontProps: (state, typography_id) => {
		const typography = getTypography(state, typography_id);

		if (!typography) {
			return null;
		}

		const { custom_font, font_family, font_variant } = typography;

		return {
			custom_font,
			font_family,
			font_variant
		};
	},
	getContextProps: (state, typography_id) => {
		const typography = getTypography(state, typography_id);

		if (!typography) {
			return null;
		}

		const {
			_context_fixed,
			context_type,
			context_post_type,
			context_post_type_template
		} = typography;

		return {
			_context_fixed,
			context_type,
			context_post_type,
			context_post_type_template
		};
	}
};
