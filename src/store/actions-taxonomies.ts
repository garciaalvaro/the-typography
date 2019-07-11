export const actions_taxonomies: ActionCreatorsTaxonomies = {
	addTaxonomyTerm: payload => ({
		type: "ADD_TAXONOMY_TERM",
		payload
	}),
	setTaxonomies: payload => ({
		type: "SET_TAXONOMIES",
		payload
	})
};
