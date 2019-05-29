import l from "utils";

const { reverse } = lodash;

const selectors = {
	getTypographyStyles(state) {
		// Filter out styles that don't belong to the current Previewer window.
		return state.typographies
			.filter(({ is_visible }) => is_visible)
			.map(({ id, style, font_family, custom_font }) => ({
				id,
				style,
				font_family: custom_font ? font_family : null
			}));
	},
	getTypography(state, id) {
		return state.typographies.find(typography => id === typography.id);
	},
	getTypographies(state, reversed = false) {
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
	getVisibleTypographiesId(state) {
		return state.typographies
			.filter(({ is_visible }) => is_visible)
			.map(({ id }) => id);
	}
};

export default selectors;
