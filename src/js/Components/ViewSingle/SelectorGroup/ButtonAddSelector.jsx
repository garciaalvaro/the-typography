import l, { pr, pr_store } from "../../../utils";

const { __ } = wp.i18n;
const { Button } = wp.components;
const { withDispatch } = wp.data;

const ButtonAddSelector = props => {
	const { addSelector } = props;

	return (
		<Button onClick={addSelector} className={`${pr}-button-add_selector`}>
			{__("Add selector")}
		</Button>
	);
};

export default withDispatch((dispatch, { parent_id }) => {
	const { addSelector, updateChanged } = dispatch(pr_store);

	return {
		addSelector: () => {
			addSelector(parent_id);
			updateChanged(true);
		}
	};
})(ButtonAddSelector);
