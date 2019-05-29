import l from "utils";

const initial_state: State["entities"] = { taxonomies: {}, blocks: [] };

const reducer = (
	state = initial_state,
	action: { type: string; [key: string]: any }
) => {
	switch (action.type) {
		case "UPDATE_BLOCKS": {
			return {
				...state,
				blocks: [...state.blocks, ...action.blocks]
			};
		}
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
					[action.taxonomy_name]: [
						...state.taxonomies[action.taxonomy_name],
						action.term
					]
				}
			};
		}
	}

	return state;
};

export default reducer;
