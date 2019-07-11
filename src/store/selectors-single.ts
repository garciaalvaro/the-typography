export const selectors_single: SelectorsSingle = {
	hasChangedSingle: state => state.has_changed_single,
	isActiveSingle: state => state.single.is_active,
	isNewSingle: state => state.single.id === 0,
	isPredefinedSingle: state => state.single._namespace !== "",
	isVisibleSingle: state => state.single.is_visible,
	getSingle: state => state.single,
	getSingleId: state => state.single.id
};
