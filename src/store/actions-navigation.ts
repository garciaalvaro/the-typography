export const actions_navigation: ActionCreatorsNavigation = {
	increaseCurrentPage: () => ({
		type: "INCREASE_CURRENT_PAGE"
	}),
	openTab: payload => ({
		type: "OPEN_TAB",
		payload
	}),
	setReachedLastPage: payload => ({
		type: "SET_REACHED_LAST_PAGE",
		payload
	}),
	setLoading: payload => ({
		type: "SET_LOADING",
		payload
	}),
	setPreviewerPageData: payload => ({
		type: "SET_PREVIEWER_PAGE_DATA",
		payload
	}),
	setView: payload => ({
		type: "SET_VIEW",
		payload
	})
};
