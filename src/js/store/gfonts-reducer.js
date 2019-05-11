import l from "utils";
import produce from "immer";
import uuid from "uuid/v4";

const { unionBy } = lodash;

const initial_state = [
	// {
	// 	id: 0,
	// 	family: "example_family",
	// 	variants: [{ id: 0, variant: 400, loaded: false }]
	// }
];

const reducer = (state = initial_state, action) => {
	return produce(state, draft => {
		switch (action.type) {
			case "LOAD_G_FONTS": {
				action.fonts.forEach(({ id, variants }) => {
					const font = draft.find(font => font.id === id);

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
				let { family: family_new, variants: variants_new } = action;
				const family = draft.find(font => font.family === family_new);

				variants_new = variants_new.map(variant => ({
					id: uuid(),
					loaded: false,
					variant
				}));

				if (family) {
					family.variants = unionBy(family.variants, variants_new, "variant");
				} else {
					draft.push({
						id: uuid(),
						family: family_new,
						variants: variants_new
					});
				}

				return;
			}
		}
	});
};

export default reducer;
