import l from "utils";

const { isUndefined } = lodash;

const selectors = {
	hasSingleChanged(state) {
		return state.single.changed;
	},
	isSingleNewTypography(state) {
		return state.single.typography.id === 0;
	},
	getSingle(state) {
		return state.single.typography;
	},
	getSingleId(state) {
		return isUndefined(state.single.typography.id)
			? null
			: state.single.typography.id;
	},
	getSingleVisibility(state) {
		return state.single.typography && state.single.typography.is_visible;
	},
	getSingleStyle(state) {
		// Filter out the style if it doesn't belong to the current Previewer window.
		const { typography, style } = state.single;

		if (isUndefined(typography.is_visible)) {
			return "";
		}
		if (typography.is_visible) {
			return style;
		}

		return null;
	}
};

export default selectors;
