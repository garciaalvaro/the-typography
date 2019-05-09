import l from "utils";

const initial_state = {};

const reducer = (state = initial_state, action) => {
	switch (action.type) {
		case "LOAD_TAXONOMIES": {
			return {
				...state,
				...action.taxonomies
			};
		}
		case "UPDATE_TAXONOMY_TERM": {
			return {
				...state,
				[action.taxonomy]: [...state[action.taxonomy], action.term]
			};
		}
	}

	return state;
};

export default reducer;
