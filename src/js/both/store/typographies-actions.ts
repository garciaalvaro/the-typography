import l from "src/js/both/utils";

const actions: Partial<ActionCreators> = {
	updateTypographiesVisibility(page_data) {
		return {
			type: "UPDATE_TYPOGRAPHIES_VISIBILITY",
			page_data
		};
	},
	activateTypography(id) {
		return {
			type: "ACTIVATE_TYPOGRAPHY",
			id
		};
	},
	deactivateTypography(id) {
		return {
			type: "DEACTIVATE_TYPOGRAPHY",
			id
		};
	},
	removeTypography(id) {
		return {
			type: "REMOVE_TYPOGRAPHY",
			id
		};
	},
	updateTypography(typography) {
		return {
			type: "UPDATE_TYPOGRAPHY",
			typography
		};
	},
	loadTypographies(typographies) {
		return {
			type: "LOAD_TYPOGRAPHIES",
			typographies
		};
	},
	loadTypography(typography) {
		return {
			type: "LOAD_TYPOGRAPHY",
			typography
		};
	},
	// rest
	fetchTypographies() {
		return {
			type: "FETCH_TYPOGRAPHIES"
		};
	}
};

export default actions;
