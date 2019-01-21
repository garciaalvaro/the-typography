import l from "../utils";

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
	getTypography(state, typography_id) {
		return state.typographies.find(({ id }) => id === typography_id);
	},
	getTypographies(state) {
		return state.typographies;
	}
};

export default selectors;
