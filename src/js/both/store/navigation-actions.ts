import l from "utils";

const actions: Partial<ActionCreators> = {
	updatePreviewerPageData(page_data) {
		return {
			type: "UPDATE_PREVIEWER_PAGE_DATA",
			page_data
		};
	},
	toggleTabOpen() {
		return {
			type: "TOGGLE_TAB_OPEN"
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
	goToInfo() {
		return {
			type: "GO_TO_INFO"
		};
	},
	updateLoading(is_loading) {
		return {
			type: "UPDATE_LOADING",
			is_loading
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
