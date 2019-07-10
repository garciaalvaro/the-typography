import l from "src/js/both/utils";

const actions: Partial<ActionCreators> = {
	updateBlocks(blocks) {
		return {
			type: "UPDATE_BLOCKS",
			blocks
		};
	},
	updateTaxonomyTerm(taxonomy_name, term) {
		return {
			type: "UPDATE_TAXONOMY_TERM",
			taxonomy_name,
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
	fetchTaxonomies(taxonomy_name) {
		return {
			type: "FETCH_TAXONOMIES",
			taxonomy_name
		};
	}
};

export default actions;
