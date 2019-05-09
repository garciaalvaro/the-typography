import l from "utils";

const actions = {
	updateTaxonomyTerm(taxonomy, term) {
		return {
			type: "UPDATE_TAXONOMY_TERM",
			taxonomy,
			term
		};
	},
	loadTaxonomies(taxonomies) {
		return {
			type: "LOAD_TAXONOMIES",
			taxonomies
		};
	},
	// controls
	fetchTaxonomies(taxonomy) {
		return {
			type: "FETCH_TAXONOMIES",
			taxonomy
		};
	}
};

export default actions;
