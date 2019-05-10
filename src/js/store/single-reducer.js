import l, {
	is_customizer,
	selector_group_defaults,
	selector_defaults,
	generateStyle
} from "utils";
import produce from "immer";
import uuidv4 from "uuid/v4";

const { remove, isUndefined, throttle } = lodash;

const initial_state = {
	typography: {},
	typography_unmodified: {},
	changed: false,
	style: ""
};
// let can_update = true;
// const resetCanUpdate = throttle(
// 	() => {
// 		can_update = true;
// 	},
// 	100,
// 	{
// 		leading: true,
// 		trailing: true
// 	}
// );

const reducer = (state = initial_state, action) => {
	return produce(state, draft => {
		switch (action.type) {
			case "UPDATE_SINGLE_VISIBILITY": {
				const { typography } = draft;

				if (isUndefined(typography.is_visible)) {
					break;
				}
				if (typography.context_type === "all_site") {
					typography.is_visible = true;
					break;
				}
				if (typography.context_type === "404_page" && action.is_404) {
					typography.is_visible = true;
					return;
				}
				if (typography.context_type === "front_page" && action.is_front_page) {
					typography.is_visible = true;
					return;
				}

				if (
					typography.context_type === "post_type" &&
					typography.context_post_type.includes(action.post_type) &&
					typography.context_post_type_template.includes(action.template)
				) {
					typography.is_visible = true;
					break;
				}
				typography.is_visible = false;
				break;
			}
			case "EMPTY_SINGLE": {
				draft.typography = {};
				draft.typography_unmodified = {};
				draft.changed = false;
				draft.style = "";
				break;
			}
			case "RESET_SINGLE": {
				draft.typography = draft.typography_unmodified;
				break;
			}
			case "UPDATE_CHANGED": {
				draft.changed = action.value;
				break;
			}
			case "LOAD_SINGLE": {
				draft.typography = action.typography;
				draft.typography_unmodified = action.typography;
				break;
			}
			case "UPDATE_PROP": {
				draft.typography[action.prop] = action.value;
				break;
			}
			case "UPDATE_SELECTOR_PROP": {
				draft.typography.selector_groups
					.find(({ id }) => id === action.parent_id)
					.selectors.find(({ id }) => id === action.id)[action.prop] =
					action.value;
				break;
			}
			case "UPDATE_SELECTOR_GROUP_PROP": {
				draft.typography.selector_groups.find(({ id }) => id === action.id)[
					action.prop
				] = action.value;
				break;
			}
			case "ADD_SELECTOR": {
				const defaults = { ...selector_defaults, id: uuidv4() };

				draft.typography.selector_groups
					.find(({ id }) => id === action.parent_id)
					.selectors.unshift(defaults);
				break;
			}
			case "ADD_SELECTOR_GROUP": {
				const defaults = { ...selector_group_defaults, id: uuidv4() };

				draft.typography.selector_groups.unshift(defaults);
				break;
			}
			case "REMOVE_SELECTOR": {
				remove(
					draft.typography.selector_groups.find(
						({ id }) => id === action.parent_id
					).selectors,
					({ id }) => id === action.id
				);
				break;
			}
			case "REMOVE_SELECTOR_GROUP": {
				remove(draft.typography.selector_groups, ({ id }) => id === action.id);
				break;
			}
		}

		// if (
		// 	is_customizer &&
		// 	can_update &&
		// 	[
		// 		"UPDATE_SINGLE_VISIBILITY",
		// 		"RESET_SINGLE",
		// 		"UPDATE_CHANGED",
		// 		"LOAD_SINGLE",
		// 		"UPDATE_PROP",
		// 		"UPDATE_SELECTOR_PROP",
		// 		"UPDATE_SELECTOR_GROUP_PROP",
		// 		"ADD_SELECTOR",
		// 		"ADD_SELECTOR_GROUP",
		// 		"REMOVE_SELECTOR",
		// 		"REMOVE_SELECTOR_GROUP"
		// 	].includes(action.type)
		// ) {
		// 	can_update = false;
		// 	resetCanUpdate();
		// 	draft.style = generateStyle(draft.typography);
		// }
	});
};

export default reducer;
