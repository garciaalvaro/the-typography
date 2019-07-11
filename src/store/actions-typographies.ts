export const actions_typographies: ActionCreatorsTypographies = {
	addTypographies: payload => ({
		type: "ADD_TYPOGRAPHIES",
		payload
	}),
	removeTypography: payload => ({
		type: "REMOVE_TYPOGRAPHY",
		payload
	}),
	setTypographyActive: payload => ({
		type: "SET_TYPOGRAPHY_ACTIVE",
		payload
	})
};
