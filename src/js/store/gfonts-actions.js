import l from "utils";

const actions = {
	addGFont(family = "", variants = []) {
		return {
			type: "ADD_G_FONT",
			family,
			variants
		};
	},
	loadGFonts(fonts) {
		return {
			type: "LOAD_G_FONTS",
			fonts
		};
	}
};

export default actions;
