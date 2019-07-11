import { difference } from "lodash";

export const selectors_fonts: SelectorsFonts = {
	getFonts: state => state.fonts,
	getFontsToLoad: state =>
		state.fonts
			.filter(
				({ variants, variants_loaded }) =>
					variants.length > variants_loaded.length
			)
			.map(({ family, variants, variants_loaded }) => ({
				family,
				variants_to_load: difference(variants, variants_loaded)
			}))
};
