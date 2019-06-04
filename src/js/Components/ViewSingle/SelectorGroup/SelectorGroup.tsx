import l, {
	icons,
	withColorClass,
	withToggle,
	withTypographyStyle,
	Div,
	addPrefix,
	pr_store
} from "utils";
import SelectorGroupEdit from "./SelectorGroupEdit";
import SelectorGroupPreview from "./SelectorGroupPreview";
import ButtonRemove from "./ButtonRemove";
import TitlePreview from "./TitlePreview";

interface withState extends setState<withState> {
	new_selector_added: boolean;
}
interface withDispatch {
	updateProp: FunctionVoid;
}
interface Parent extends SelectorGroup {
	is_new: boolean;
	parent_typography_style: Partial<TypographyStyle>;
}
type Props = withState &
	withDispatch &
	Parent &
	withTypographyStyle &
	withToggle &
	withColorClass;

const { debounce } = lodash;
const { withDispatch } = wp.data;
const { Icon, Button } = wp.components;
const { compose, withState } = wp.compose;
const { Component } = wp.element;

class SelectorGroupComp extends Component<Props> {
	componentWillUnmount = () => {
		this.resetNewSelectorAdded.cancel();
	};

	componentDidUpdate(prev_props: Props) {
		const { is_new, open, selectors, setState } = this.props;

		if (selectors.length > prev_props.selectors.length) {
			setState({ new_selector_added: true });
			this.resetNewSelectorAdded();
		}

		if (is_new && !prev_props.is_new) {
			open();
		}
	}

	// Debounce the value change.
	resetNewSelectorAdded = debounce(
		() => this.props.setState({ new_selector_added: false }),
		1000,
		{
			leading: false,
			trailing: true
		}
	);

	render() {
		const { props } = this;
		const { color_class, is_open, id, toggle, is_new, fixed } = props;

		return (
			<Div
				classes={[
					"selector_group",
					color_class,
					fixed ? "is_fixed" : null,
					is_open ? "is_open" : "is_closed",
					is_new ? "selector_group-new" : null
				]}
			>
				<TitlePreview {...props} />
				{!fixed && <ButtonRemove id={id} />}
				<Button
					onClick={toggle}
					className={addPrefix("button-toggle_selector_group")}
				>
					<Icon
						className={addPrefix("panel-button")}
						icon={is_open ? icons.collapse : icons.expand}
					/>
				</Button>
				{is_open ? (
					<SelectorGroupEdit {...props} />
				) : (
					<SelectorGroupPreview {...props} />
				)}
			</Div>
		);
	}
}

export default compose([
	withState({ new_selector_added: false }),
	withTypographyStyle,
	withToggle,
	withColorClass,
	withDispatch<withDispatch, Parent>((dispatch, { id }) => {
		const { updateChanged, updateSelectorGroupProp } = dispatch(pr_store);

		return {
			updateProp: (prop, value) => {
				updateSelectorGroupProp(prop, value, id);
				updateChanged(true);
			}
		};
	})
])(SelectorGroupComp);
