import l, { Span, Div, withTypographyStyle } from "utils";
import SelectorGroup from "./SelectorGroup/SelectorGroup";
import ButtonAddGroup from "./SelectorGroup/ButtonAddGroup";

const { __ } = wp.i18n;

const SelectorGroups = props => {
	const {
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
	} = props;
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
			{selector_groups.map(group => (
				<SelectorGroup
					key={group.id}
					{...group}
					parent_typography_style={typography_style}
					parent_typography={parent_typography}
				/>
			))}
		</Div>
	);
};

export default withTypographyStyle(SelectorGroups);
