import l from "src/js/both/utils";

const actions: Partial<ActionCreators> = {
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
