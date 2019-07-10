import l from "src/js/both/utils";

const { isUndefined } = lodash;

const selectors: Partial<Selectors> = {
	hasSingleChanged(state) {
		return state.single.changed;
	},
	isSingleNewTypography(state) {
		return !!(
			state.single &&
			state.single.typography &&
			state.single.typography.id === 0
		);
	},
	getSingle(state) {
		return state.single.typography;
	},
	getSingleId(state) {
		return state.single &&
			state.single.typography &&
			!isUndefined(state.single.typography.id)
			? state.single.typography.id
			: null;
	},
	isSingleVisible(state) {
		return !!(state.single.typography && state.single.typography.is_visible);
	}
};

export default selectors;
