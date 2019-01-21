import l from "../utils";

const actions = {
	updateTypographiesVisibility(data) {
		return {
			type: "UPDATE_TYPOGRAPHIES_VISIBILITY",
			...data
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
