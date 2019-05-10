import l, { is_customizer, generateStyle } from "utils";
import produce from "immer";

const { forEach, remove } = lodash;

const initial_state = [];

const reducer = (state = initial_state, action) => {
	return produce(state, draft => {
		switch (action.type) {
			case "LOAD_TYPOGRAPHY": {
				let typography = action.typography;

				// if (is_customizer) {
				// 	typography.style = generateStyle(typography);
				// }

				draft.unshift(typography);
				return;
			}
			case "UPDATE_TYPOGRAPHIES_VISIBILITY": {
				forEach(draft, typography => {
					if (typography.context_type === "all_site") {
						typography.is_visible = true;
						return;
					}
					if (
						typography.context_type === "front_page" &&
						action.is_front_page
					) {
						typography.is_visible = true;
						return;
					}
					if (typography.context_type === "404_page" && action.is_404) {
						typography.is_visible = true;
						return;
					}
					if (
						typography.context_type === "post_type" &&
						typography.context_post_type.includes(action.post_type) &&
						typography.context_post_type_template.includes(action.template)
					) {
						typography.is_visible = true;
						return;
					}

					typography.is_visible = false;
				});
				return;
			}
			case "REMOVE_TYPOGRAPHY": {
				remove(draft, ({ id }) => id === action.id);
				return;
			}
			case "LOAD_TYPOGRAPHIES": {
				const existent_ids = draft.map(({ id }) => id);
				let typographies = action.typographies;

				typographies = typographies.filter(
					({ id }) => !existent_ids.includes(id)
				);

				// if (is_customizer) {
				// 	typographies = typographies.map(typography => ({
				// 		...typography,
				// 		style: generateStyle(typography)
				// 	}));
				// }

				draft.push(...typographies);
				return;
			}
			case "UPDATE_TYPOGRAPHY": {
				let typography = action.typography;

				// if (is_customizer) {
				// 	typography = { ...typography, style: generateStyle(typography) };
				// }

				const index = draft.findIndex(({ id }) => id === typography.id);

				draft[index] = typography;
				return;
			}
		}
	});
};

export default reducer;
