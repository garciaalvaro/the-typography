import l from "utils";

const initial_state = { taxonomies: {}, blocks: [] };

const reducer = (state = initial_state, action) => {
	switch (action.type) {
		case "LOAD_TAXONOMIES": {
			return {
				...state,
				taxonomies: {
					...state.taxonomies,
					...action.taxonomies
				}
			};
		}
		case "UPDATE_TAXONOMY_TERM": {
			return {
				...state,
				taxonomies: {
					...state.taxonomies,
					[action.taxonomy]: [...state.taxonomies[action.taxonomy], action.term]
				}
			};
		}
	}

	return state;
};

export default reducer;
