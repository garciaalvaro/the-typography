import l from "utils";

const actions = {
	addGFont(typography_id, family = "", variants = []) {
		return {
			type: "ADD_G_FONT",
			typography_id,
			family,
			variants
		};
	},
	updateGFontsLoaded(fonts) {
		return {
			type: "UPDATE_G_FONTS_LOADED",
			fonts
		};
	}
};

export default actions;
