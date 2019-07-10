import l from "src/js/both/utils";

const selectors: Partial<Selectors> = {
	getPreviewerPageData(state) {
		return {
			post_type: state.navigation.previewer_post_type,
			template: state.navigation.previewer_template,
			is_404: state.navigation.previewer_is_404,
			is_front_page: state.navigation.previewer_is_front_page
		};
	},
	getTabOpen(state) {
		return state.navigation.tab_open;
	},
	isLastPage(state) {
		return state.navigation.is_last_page;
	},
	isLoading(state) {
		return state.navigation.is_loading;
	},
	getPage(state) {
		return state.navigation.page;
	},
	getView(state) {
		return state.navigation.view;
	}
};

export default selectors;
