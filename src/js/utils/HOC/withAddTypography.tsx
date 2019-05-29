import l, { is_customizer, pr_store, typography_defaults } from "utils";

const { compose } = wp.compose;
const { withDispatch } = wp.data;

const withAddTypography = WrappedComponent => props => (
	<WrappedComponent {...props} />
);

export default compose([
	withDispatch(dispatch => {
		const { loadSingle, goToSingle } = dispatch(pr_store);
		const defaults = {
			...typography_defaults,
			is_visible: is_customizer ? true : false
		};

		return {
			addTypography: () => {
				loadSingle(defaults);
				goToSingle();
			}
		};
	}),
	withAddTypography
]);
