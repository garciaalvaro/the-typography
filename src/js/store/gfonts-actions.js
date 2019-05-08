import l from "utils";

const actions = {
	updateGFont(family, variants) {
		return {
			type: "UPDATE_G_FONT",
			family,
			variants
		};
	},
	updateLoadedGFonts(fonts) {
		return {
			type: "UPDATE_LOADED_G_FONTS",
			fonts
		};
	}
};

export default actions;
