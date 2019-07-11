import { __ } from "@wordpress/i18n";

import { ControlTextToggle, Div } from "utils/Components";
import { Color } from "../TypographyStyle/Color";
import { FontSize } from "../TypographyStyle/FontSize";
import { FontStyle } from "../TypographyStyle/FontStyle";
import { FontWeight } from "../TypographyStyle/FontWeight";
import { LineHeight } from "../TypographyStyle/LineHeight";
import { LetterSpacing } from "../TypographyStyle/LetterSpacing";
import { TextTransform } from "../TypographyStyle/TextTransform";
import { TextDecoration } from "../TypographyStyle/TextDecoration";

export const EditGroupStyle: React.ComponentType<SelectorGroup> = props => {
	const {
		custom_typography,
		id,
		custom_font_size,
		custom_line_height,
		custom_letter_spacing,
		custom_color,
		custom_font_weight,
		custom_font_style,
		custom_text_transform,
		custom_text_decoration,
		font_size,
		line_height,
		letter_spacing,
		color,
		font_weight,
		font_style,
		text_transform,
		text_decoration
	} = props;

	return (
		<ControlTextToggle
			prop_key="custom_typography"
			prop_value={custom_typography}
			group_id={id}
			label={__("Use custom typography")}
		>
			<Div className="typography">
				<Color group_id={id} custom_color={custom_color} color={color} />
				<FontSize
					group_id={id}
					custom_font_size={custom_font_size}
					font_size={font_size}
				/>
				<FontStyle
					group_id={id}
					custom_font_style={custom_font_style}
					font_style={font_style}
				/>
				<FontWeight
					group_id={id}
					custom_font_weight={custom_font_weight}
					font_weight={font_weight}
				/>
				<LineHeight
					group_id={id}
					custom_line_height={custom_line_height}
					line_height={line_height}
				/>
				<LetterSpacing
					group_id={id}
					custom_letter_spacing={custom_letter_spacing}
					letter_spacing={letter_spacing}
				/>
				<TextTransform
					group_id={id}
					custom_text_transform={custom_text_transform}
					text_transform={text_transform}
				/>
				<TextDecoration
					group_id={id}
					custom_text_decoration={custom_text_decoration}
					text_decoration={text_decoration}
				/>
			</Div>
		</ControlTextToggle>
	);
};
