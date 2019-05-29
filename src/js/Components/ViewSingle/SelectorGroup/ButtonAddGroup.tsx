import l, { addPrefix, pr_store } from "utils";

interface withDispatch {
	addSelectorGroup: FunctionVoid;
}
type Props = withDispatch;

const { throttle } = lodash;
const { Component } = wp.element;
const { __ } = wp.i18n;
const { Button } = wp.components;
const { withDispatch } = wp.data;

class ButtonAddGroup extends Component<Props> {
	componentWillUnmount = () => {
		this.addSelectorGroupThrottled.cancel();
	};

	// Throttle the action.
	addSelectorGroupThrottled = throttle(
		() => this.props.addSelectorGroup(),
		1000,
		{
			leading: true,
			trailing: false
		}
	);

	render() {
		return (
			<Button
				onClick={this.addSelectorGroupThrottled}
				id={addPrefix("button-add_selector_group")}
			>
				{__("Add group of selectors")}
			</Button>
		);
	}
}

export default withDispatch(dispatch => {
	const { addSelectorGroup, updateChanged } = dispatch(pr_store);

	return {
		addSelectorGroup: () => {
			addSelectorGroup();
			updateChanged(true);
		}
	};
})(ButtonAddGroup);
