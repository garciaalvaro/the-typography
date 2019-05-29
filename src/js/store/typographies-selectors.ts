import l from "utils";

const { reverse } = lodash;

const selectors: Partial<Selectors> = {
	getTypography(state, id) {
		return state.typographies.find(typography => id === typography.id);
	},
	getTypographies(state, reversed = false) {
		const { typographies } = state;

		if (!reversed) {
			return typographies;
		}

		return reverse([
			...typographies.map(typography => ({
				...typography,
				selector_groups: reverse([...typography.selector_groups])
			}))
		]);
	},
	getVisibleTypographiesId(state) {
		return state.typographies
			.filter(({ is_visible }) => is_visible)
			.map(({ id }) => id);
	}
};

export default selectors;
