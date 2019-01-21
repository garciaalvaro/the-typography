import l, {
	icons,
	withColorClass,
	withToggle,
	withTypographyStyle,
	Div,
	pr,
	pr_store,
	generateClassName
} from "../../../utils";
import SelectorGroupEdit from "./SelectorGroupEdit";
import SelectorGroupPreview from "./SelectorGroupPreview";
import ButtonRemove from "./ButtonRemove";
import TitlePreview from "./TitlePreview";

const { withDispatch } = wp.data;
const { Icon, Button } = wp.components;
const { compose } = wp.compose;
const { Component } = wp.element;

class SelectorGroup extends Component {
	componentDidMount = () => {
		const { open, selectors } = this.props;

		if (selectors.length === 0) {
			open();
		}
	};

	render() {
		const { props } = this;
		const { color_class, is_open, id, toggle } = props;

		return (
			<Div
				className={generateClassName([
					`${pr}-selector_group`,
					color_class ? `${pr}-${color_class}` : null,
					is_open ? `${pr}-is_open` : `${pr}-is_closed`
				])}
			>
				<TitlePreview {...props} />
				<ButtonRemove id={id} />
				<Button
					onClick={toggle}
					className={`${pr}-button-toggle_selector_group`}
				>
					<Icon
						className={`${pr}-panel-button`}
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
	withTypographyStyle,
	withToggle,
	withColorClass,
	withDispatch((dispatch, { id }) => {
		const { updateChanged, updateSelectorGroupProp } = dispatch(pr_store);

		return {
			updateProp: (prop, value) => {
				updateSelectorGroupProp(prop, value, id);
				updateChanged(true);
			}
		};
	})
])(SelectorGroup);
