import l from "utils";

const initial_state = {
	view: "index",
	page: 1,
	last_page: false,
	loading: false,
	previewer_post_type: "",
	previewer_template: "",
	previewer_is_404: "",
	previewer_is_front_page: ""
};

const reducer = (state = initial_state, action) => {
	switch (action.type) {
		case "UPDATE_PREVIEWER_PAGE_DATA": {
			return {
				...state,
				previewer_post_type: action.post_type,
				previewer_template: action.template,
				previewer_is_404: action.is_404,
				previewer_is_front_page: action.is_front_page
			};
		}
		case "GO_TO_INDEX": {
			return {
				...state,
				view: "index"
			};
		}
		case "GO_TO_SINGLE": {
			return {
				...state,
				view: "single"
			};
		}
		case "UPDATE_LOADING": {
			return {
				...state,
				loading: action.value
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
				last_page: true
			};
		}
	}

	return state;
};

export default reducer;
