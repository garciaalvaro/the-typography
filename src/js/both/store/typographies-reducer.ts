import l from "src/js/both/utils";
import produce from "immer";

const { forEach, remove } = lodash;

const initial_state: State["typographies"] = [];

const reducer = (
	state = initial_state,
	action:
		| Actions["deactivateTypography"]
		| Actions["activateTypography"]
		| Actions["loadTypography"]
		| Actions["updateTypographiesVisibility"]
		| Actions["removeTypography"]
		| Actions["loadTypographies"]
		| Actions["updateTypography"]
) => {
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
				const { is_front_page, is_404, post_type, template } = action.page_data;

				forEach(draft, typography => {
					if (typography.context_type === "all_site") {
						typography.is_visible = true;
						return;
					}
					if (typography.context_type === "front_page" && is_front_page) {
						typography.is_visible = true;
						return;
					}
					if (typography.context_type === "404_page" && is_404) {
						typography.is_visible = true;
						return;
					}
					if (
						post_type &&
						typography.context_type === "post_type" &&
						typography.context_post_type.includes(post_type) &&
						typography.context_post_type_template.includes(template)
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
			case "ACTIVATE_TYPOGRAPHY": {
				const index = draft.findIndex(({ id }) => id === action.id);
				draft[index].is_active = true;

				return;
			}
			case "DEACTIVATE_TYPOGRAPHY": {
				const index = draft.findIndex(({ id }) => id === action.id);
				draft[index].is_active = false;

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
