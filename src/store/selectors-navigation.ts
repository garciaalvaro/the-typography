export const selectors_navigation: SelectorsNavigation = {
	reachedLastPage: state => state.reached_last_page,
	isLoading: state => state.is_loading,
	getCurrentPage: state => state.current_page,
	getPreviewerPageData: state => state.previewer_page_data,
	getTabOpen: state => state.tab_open,
	getView: state => state.view
};
