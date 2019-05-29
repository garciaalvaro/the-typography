import l, { Span, Div, withTypographyStyle } from "utils";
import SelectorGroup from "./SelectorGroup/SelectorGroup";
import ButtonAddGroup from "./SelectorGroup/ButtonAddGroup";

interface withState extends setState<withState> {
	new_group_added: boolean;
}
interface Parent extends Typography {
	updateProp: FunctionVoid;
}
type Props = withTypographyStyle & withState & Parent;

const { debounce } = lodash;
const { __ } = wp.i18n;
const { compose, withState } = wp.compose;
const { Component } = wp.element;

class SelectorGroups extends Component<Props> {
	componentWillUnmount = () => {
		this.resetNewGroupAdded.cancel();
	};

	componentDidUpdate(prev_props: Props) {
		const { selector_groups, setState } = this.props;

		if (selector_groups.length > prev_props.selector_groups.length) {
			setState({ new_group_added: true });
			this.resetNewGroupAdded();
		}
	}

	// Debounce the value change.
	resetNewGroupAdded = debounce(
		() => this.props.setState({ new_group_added: false }),
		1000,
		{
			leading: false,
			trailing: true
		}
	);

	render() {
		const {
			new_group_added,
			selector_groups,
			typography_style,
			custom_font_size,
			font_size,
			custom_line_height,
			line_height,
			custom_letter_spacing,
			letter_spacing,
			custom_color,
			color,
			custom_font_weight,
			font_weight,
			custom_font_style,
			font_style,
			custom_text_transform,
			text_transform,
			custom_text_decoration,
			text_decoration
		} = this.props;
		const parent_typography = {
			custom_font_size,
			font_size,
			custom_line_height,
			line_height,
			custom_letter_spacing,
			letter_spacing,
			custom_color,
			color,
			custom_font_weight,
			font_weight,
			custom_font_style,
			font_style,
			custom_text_transform,
			text_transform,
			custom_text_decoration,
			text_decoration
		};

		return (
			<Div id="selector_groups">
				<Span classes="panel-label">{__("Selectors")}</Span>
				<ButtonAddGroup />
				{selector_groups.map((group, index) => {
					const is_new = new_group_added && index === 0;

					return (
						<SelectorGroup
							key={group.id}
							{...group}
							parent_typography_style={typography_style}
							parent_typography={parent_typography}
							is_new={is_new}
						/>
					);
				})}
			</Div>
		);
	}
}

export default compose([
	withState({ new_group_added: false }),
	withTypographyStyle
])(SelectorGroups);
