import l from "utils";

const selectors: Partial<Selectors> = {
	getBlock(state, name) {
		return state.entities.blocks.find(block => block.name === name);
	},
	getBlocks(state) {
		return state.entities.blocks;
	},
	getTaxonomies(state) {
		return state.entities.taxonomies;
	}
};

export default selectors;
