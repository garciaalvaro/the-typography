import l, { is_customizer, pr_store, typography_defaults } from "utils";

interface withDispatch {
	addTypography: FunctionVoid;
}

export default wp.data.withDispatch<withDispatch>(dispatch => {
	const { loadSingle, goToSingle } = dispatch(pr_store);
	const defaults = {
		...typography_defaults,
		is_visible: is_customizer ? true : false
	};
	const addTypography: FunctionVoid = () => {
		loadSingle(defaults);
		goToSingle();
	};

	return {
		addTypography
	};
});
