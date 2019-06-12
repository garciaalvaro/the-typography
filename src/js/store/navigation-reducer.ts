import l from "utils";

const initial_state: State["navigation"] = {
	view: "index",
	page: 1,
	is_last_page: false,
	is_loading: false,
	previewer_post_type: "",
	previewer_template: "index",
	previewer_is_404: false,
	previewer_is_front_page: false
};

const reducer = (
	state = initial_state,
	action:
		| Actions["updatePreviewerPageData"]
		| Actions["goToIndex"]
		| Actions["goToSingle"]
		| Actions["goToInsert"]
		| Actions["updateLoading"]
		| Actions["increasePage"]
		| Actions["updateLastPage"]
) => {
	switch (action.type) {
		case "UPDATE_PREVIEWER_PAGE_DATA": {
			return {
				...state,
				previewer_post_type: action.page_data.post_type,
				previewer_template: action.page_data.template,
				previewer_is_404: action.page_data.is_404,
				previewer_is_front_page: action.page_data.is_front_page
			};
		}
		case "GO_TO_INDEX": {
			const state_new: State["navigation"] = {
				...state,
				view: "index"
			};

			return state_new;
		}
		case "GO_TO_SINGLE": {
			const state_new: State["navigation"] = {
				...state,
				view: "single"
			};

			return state_new;
		}
		case "GO_TO_INSERT": {
			const state_new: State["navigation"] = {
				...state,
				view: "insert"
			};

			return state_new;
		}
		case "UPDATE_LOADING": {
			return {
				...state,
				is_loading: action.is_loading
			};
		}
		case "INCREASE_PAGE": {
			return {
				...state,
				page: state.page + 1
			};
		}
		case "UPDATE_LAST_PAGE": {
			return {
				...state,
				is_last_page: true
			};
		}
	}

	return state;
};

export default reducer;
