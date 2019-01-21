import l from "../utils";
import produce from "immer";

const { isUndefined, isEmpty, forEach } = lodash;

const initial_state = {};

const reducer = (state = initial_state, action) => {
	return produce(state, draft => {
		switch (action.type) {
			case "UPDATE_LOADED_G_FONTS": {
				forEach(action.fonts, (variants, family) => {
					variants = variants.map(({ variant }) => variant);

					const variant_to_load = draft[family].find(({ variant }) =>
						variants.includes(variant)
					);

					if (!isUndefined(variant_to_load)) {
						draft[family].find(({ variant }) =>
							variants.includes(variant)
						).loaded = true;
					}
				});
				return;
			}
			case "UPDATE_G_FONT": {
				const { family, variants } = action;

				if (isUndefined(state[family])) {
					draft[family] = variants.map(variant => ({
						loaded: false,
						variant
					}));

					return draft;
				}

				const existent_variants = draft[family].map(({ variant }) => variant);

				const new_variants = variants
					.filter(variant => !existent_variants.includes(variant))
					.map(variant => ({ loaded: false, variant }));

				if (!isEmpty(new_variants)) {
					draft[family] = [...draft[family], ...new_variants];
				}
				return;
			}
		}
	});
};

export default reducer;
