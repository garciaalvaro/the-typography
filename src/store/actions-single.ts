export const actions_single: ActionCreatorsSingle = {
	addSelector: payload => ({
		type: "ADD_SELECTOR",
		payload
	}),
	addSelectorGroup: () => ({
		type: "ADD_SELECTOR_GROUP"
	}),
	loadSingle: payload => ({
		type: "LOAD_SINGLE",
		payload
	}),
	undoSingle: () => ({
		type: "UNDO_SINGLE"
	}),
	resetSingle: () => ({
		type: "RESET_SINGLE"
	}),
	resetSingleStyle: () => ({
		type: "RESET_SINGLE_STYLE"
	}),
	resetSelectorGroupStyle: payload => ({
		type: "RESET_SELECTOR_GROUP_STYLE",
		payload
	}),
	setHasChangedSingle: payload => ({
		type: "SET_HAS_CHANGED_SINGLE",
		payload
	}),
	setProp: payload => ({
		type: "SET_PROP",
		payload
	}),
	removeSelector: payload => ({
		type: "REMOVE_SINGLE_SELECTOR",
		payload
	}),
	removeSelectorGroup: payload => ({
		type: "REMOVE_SINGLE_SELECTOR_GROUP",
		payload
	}),
	updateTypography: payload => ({
		type: "UPDATE_TYPOGRAPHY",
		payload
	})
};
