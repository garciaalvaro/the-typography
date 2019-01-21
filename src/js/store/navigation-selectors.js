import l from "../utils";

const selectors = {
	getPreviewerData(state) {
		return {
			post_type: state.navigation.previewer_post_type,
			template: state.navigation.previewer_template,
			is_404: state.navigation.previewer_is_404,
			is_front_page: state.navigation.previewer_is_front_page
		};
	},
	isLastPage(state) {
		return state.navigation.last_page;
	},
	isLoading(state) {
		return state.navigation.loading;
	},
	getPage(state) {
		return state.navigation.page;
	},
	getView(state) {
		return state.navigation.view;
	}
};

export default selectors;
