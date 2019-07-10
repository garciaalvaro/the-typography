import l, { addPrefix, pr_store } from "utils";

interface withDispatch {
	addSelector: FunctionVoid;
}
interface Parent {
	parent_id: string;
}
type Props = withDispatch & Parent;

const { throttle } = lodash;
const { Component } = wp.element;
const { __ } = wp.i18n;
const { Button } = wp.components;
const { withDispatch } = wp.data;

class ButtonAddSelector extends Component<Props> {
	componentWillUnmount = () => {
		this.addSelectorThrottled.cancel();
	};

	// Throttle the action.
	addSelectorThrottled = throttle(() => this.props.addSelector(), 1000, {
		leading: true,
		trailing: false
	});

	render() {
		return (
			<Button
				onClick={this.addSelectorThrottled}
				className={addPrefix("button-add_selector")}
			>
				{__("Add selector")}
			</Button>
		);
	}
}

export default withDispatch<withDispatch, Parent>((dispatch, { parent_id }) => {
	const { addSelector, updateChanged } = dispatch(pr_store);

	return {
		addSelector: () => {
			addSelector(parent_id);
			updateChanged(true);
		}
	};
})(ButtonAddSelector);
