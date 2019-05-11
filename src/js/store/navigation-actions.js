import l from "utils";

const actions = {
	updatePreviewerPageData(data) {
		return {
			type: "UPDATE_PREVIEWER_PAGE_DATA",
			...data
		};
	},
	goToIndex() {
		return {
			type: "GO_TO_INDEX"
		};
	},
	goToSingle() {
		return {
			type: "GO_TO_SINGLE"
		};
	},
	updateLoading(value) {
		return {
			type: "UPDATE_LOADING",
			value
		};
	},
	increasePage() {
		return {
			type: "INCREASE_PAGE"
		};
	},
	updateLastPage() {
		return {
			type: "UPDATE_LAST_PAGE"
		};
	}
};

export default actions;
