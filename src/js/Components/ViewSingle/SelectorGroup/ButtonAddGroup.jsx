import l, { addPrefix, pr_store } from "utils";

const { __ } = wp.i18n;
const { Button } = wp.components;
const { withDispatch } = wp.data;

const ButtonAddGroup = props => {
	const { addSelectorGroup } = props;

	return (
		<Button
			onClick={addSelectorGroup}
			id={addPrefix("button-add_selector_group")}
		>
			{__("Add group of selectors")}
		</Button>
	);
};

export default withDispatch(dispatch => {
	const { addSelectorGroup, updateChanged } = dispatch(pr_store);

	return {
		addSelectorGroup: () => {
			addSelectorGroup();
			updateChanged(true);
		}
	};
})(ButtonAddGroup);
