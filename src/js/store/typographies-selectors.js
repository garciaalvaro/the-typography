import l from "utils";

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
	getTypographies(state) {
		return state.typographies;
	},
	getVisibleTypographiesId(state) {
		return state.typographies
			.filter(({ is_visible }) => is_visible)
			.map(({ id }) => id);
	}
};

export default selectors;
