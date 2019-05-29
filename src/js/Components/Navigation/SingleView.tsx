import l, { Span, pr_store } from "utils";
import ButtonBack from "./ButtonBack";
import ButtonUndo from "./ButtonUndo";
import ButtonUpdate from "./ButtonUpdate";

interface withState extends setState<withState> {
	button_state: "update" | "save";
	show_message: boolean;
}
interface withSelect {
	single_changed: boolean;
	is_single_new_typography: boolean;
}
interface Parent {
	setState: FunctionVoid;
}
type Props = withState & withSelect & Parent;

const { throttle } = lodash;
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { compose, withState } = wp.compose;
const { withSelect } = wp.data;

class SingleView extends Component<Props> {
	componentWillUnmount = () => {
		this.resetShowMessage.cancel();
		this.resetButtonState.cancel();
	};

	componentDidMount = () => {
		const { is_single_new_typography, setState } = this.props;

		if (is_single_new_typography) {
			setState({ button_state: "save" });
		}
	};

	// Throttle the value change to display the "updated"/"saved" message a few seconds.
	resetShowMessage = throttle(
		() => this.props.setState({ show_message: false }),
		2000,
		{
			leading: false,
			trailing: true
		}
	);
	resetButtonState = throttle(
		() => this.props.setState({ button_state: "update" }),
		2000,
		{
			leading: false,
			trailing: true
		}
	);

	render() {
		const {
			button_state,
			show_message,
			single_changed,
			is_single_new_typography
		} = this.props;

		if (single_changed) {
			return (
				<Fragment>
					<ButtonBack single_changed={single_changed} />
					{!is_single_new_typography && <ButtonUndo {...this.props} />}
					<ButtonUpdate
						{...this.props}
						resetShowMessage={this.resetShowMessage}
						resetButtonState={this.resetButtonState}
					/>
				</Fragment>
			);
		}

		if (show_message) {
			return (
				<Fragment>
					<ButtonBack single_changed={single_changed} />
					<Span classes="navigation-message">
						{button_state === "update" ? __("Updated") : __("Saved")}
					</Span>
				</Fragment>
			);
		}

		return <ButtonBack single_changed={single_changed} />;
	}
}

export default compose([
	withState({
		button_state: "update",
		show_message: false
	}),
	withSelect(select => {
		const { hasSingleChanged, isSingleNewTypography } = select(pr_store);
		const single_changed = hasSingleChanged();
		const is_single_new_typography = isSingleNewTypography();

		return {
			single_changed,
			is_single_new_typography
		};
	})
])(SingleView);
