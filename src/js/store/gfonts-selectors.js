import l from "utils";

const selectors = {
	getGFontsToLoad(state) {
		let gfonts_to_load;
		gfonts_to_load = state.gfonts.filter(gfont => {
			const variants_not_loaded = gfont.variants.filter(
				({ loaded }) => !loaded
			);

			if (variants_not_loaded.length > 0) {
				return true;
			}

			return false;
		});
		gfonts_to_load = gfonts_to_load.map(({ id, family, variants }) => ({
			id,
			family,
			variants: variants
				.filter(({ loaded }) => !loaded)
				.map(({ variant }) => variant)
		}));

		return gfonts_to_load;
	},
	getGFonts(state) {
		return state.gfonts;
	}
};

export default selectors;
