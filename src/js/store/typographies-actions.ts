import l from "utils";

const actions: Partial<ActionCreators> = {
	updateTypographiesVisibility(page_data) {
		return {
			type: "UPDATE_TYPOGRAPHIES_VISIBILITY",
			page_data
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
