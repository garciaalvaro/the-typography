import l from "utils";

const selectors: Partial<Selectors> = {
	getGFontsToLoad(state) {
		let gfonts_to_load;
		gfonts_to_load = state.gfonts.filter(gfont => {
			const variants_not_loaded = gfont.variants.filter(
				({ loaded }) => !loaded
			);

			if (variants_not_loaded.length) {
				return true;
			}

			return false;
		});
		gfonts_to_load = gfonts_to_load.map(
			({ id, family, variants, typographies_id }) => ({
				id,
				family,
				typographies_id,
				variants: variants
					.filter(({ loaded }) => !loaded)
					.map(({ variant }) => variant)
			})
		);

		return gfonts_to_load;
	},
	getGFonts(state) {
		return state.gfonts;
	}
};

export default selectors;
