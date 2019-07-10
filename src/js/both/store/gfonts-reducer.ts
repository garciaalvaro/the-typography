import l from "utils";
import produce from "immer";
import uuid from "uuid/v4";

const { unionBy, uniq } = lodash;

const initial_state: State["gfonts"] = [];

const reducer = (
	state = initial_state,
	action: Actions["updateGFontsLoaded"] | Actions["addGFont"]
) => {
	return produce(state, draft => {
		switch (action.type) {
			case "UPDATE_G_FONTS_LOADED": {
				action.fonts.forEach(({ id, variants }: GFontVariants) => {
					const font = draft.find(font => font.id === id);

					if (!font) {
						return;
					}

					font.variants = font.variants.map(variant => {
						if (variants.includes(variant.variant)) {
							return { ...variant, loaded: true };
						}

						return variant;
					});
				});
				return;
			}
			case "ADD_G_FONT": {
				let {
					typography_id,
					family: family_new,
					variants: variants_new
				} = action;

				const font_previous = draft.find(({ typographies_id }) =>
					typographies_id.includes(typography_id)
				);

				if (font_previous) {
					font_previous.typographies_id = font_previous.typographies_id.filter(
						id => id !== typography_id
					);
				}

				const font_old = draft.find(font => font.family === family_new);

				const variants_prepared = variants_new.map(variant => ({
					id: uuid(),
					loaded: false,
					variant
				}));

				if (font_old) {
					font_old.typographies_id = uniq([
						...font_old.typographies_id,
						typography_id
					]);
					font_old.variants = unionBy(
						font_old.variants,
						variants_prepared,
						"variant"
					);
				} else {
					draft.push({
						typographies_id: [typography_id],
						id: uuid(),
						family: family_new,
						variants: variants_prepared
					});
				}

				return;
			}
		}
	});
};

export default reducer;
