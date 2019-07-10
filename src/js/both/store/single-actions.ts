import l from "src/js/both/utils";

const actions: Partial<ActionCreators> = {
	resetProps(values) {
		return {
			type: "RESET_PROPS",
			values
		};
	},
	resetSelectorGroupProps(values, id) {
		return {
			type: "RESET_SELECTOR_GROUP_PROPS",
			values,
			id
		};
	},
	updateSingleVisibility(page_data) {
		return {
			type: "UPDATE_SINGLE_VISIBILITY",
			page_data
		};
	},
	emptySingle() {
		return {
			type: "EMPTY_SINGLE"
		};
	},
	resetSingle() {
		return {
			type: "RESET_SINGLE"
		};
	},
	updateChanged(changed) {
		return {
			type: "UPDATE_CHANGED",
			changed
		};
	},
	loadSingle(typography) {
		return {
			type: "LOAD_SINGLE",
			typography
		};
	},
	updateProp(prop, value) {
		return {
			type: "UPDATE_PROP",
			prop,
			value
		};
	},
	updateSelectorGroupProp(prop, value, id) {
		return {
			type: "UPDATE_SELECTOR_GROUP_PROP",
			prop,
			value,
			id
		};
	},
	updateSelectorProp(prop, value, id, parent_id) {
		return {
			type: "UPDATE_SELECTOR_PROP",
			prop,
			value,
			id,
			parent_id
		};
	},
	addSelector(parent_id) {
		return {
			type: "ADD_SELECTOR",
			parent_id
		};
	},
	addSelectorGroup() {
		return {
			type: "ADD_SELECTOR_GROUP"
		};
	},
	removeSelector(id, parent_id) {
		return {
			type: "REMOVE_SELECTOR",
			id,
			parent_id
		};
	},
	removeSelectorGroup(id) {
		return {
			type: "REMOVE_SELECTOR_GROUP",
			id
		};
	}
};

export default actions;
