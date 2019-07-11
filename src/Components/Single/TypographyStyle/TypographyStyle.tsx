import { __ } from "@wordpress/i18n";
import { useSelect } from "@wordpress/data";

import "./TypographyStyle.styl";
import { store_slug } from "utils/data";
import { Panel } from "utils/Components";
import { Font } from "./Font";
import { Color } from "./Color";
import { FontSize } from "./FontSize";
import { FontStyle } from "./FontStyle";
import { FontWeight } from "./FontWeight";
import { LineHeight } from "./LineHeight";
import { LetterSpacing } from "./LetterSpacing";
import { TextTransform } from "./TextTransform";
import { TextDecoration } from "./TextDecoration";
import { ButtonResetDefaults } from "../ButtonResetDefaults/ButtonResetDefaults";

export const TypographyStyle: React.ComponentType = props => {
	const _typography_style_defaults = useSelect<
		Typography["_typography_style_defaults"]
	>(select => select(store_slug).getTypographyStyleDefaults({}));

	const style = useSelect<TypographyStyle>(select =>
		select(store_slug).getStyleProps()
	);

	const {
		custom_font,
		custom_font_size,
		custom_line_height,
		custom_letter_spacing,
		custom_color,
		custom_font_weight,
		custom_font_style,
		custom_text_transform,
		custom_text_decoration,
		font_family,
		font_variant,
		font_size,
		line_height,
		letter_spacing,
		color,
		font_weight,
		font_style,
		text_transform,
		text_decoration
	} = style;

	return (
		<Panel id="single-typography" label={__("Typography")}>
			{_typography_style_defaults && <ButtonResetDefaults />}

			<Font
				custom_font={custom_font}
				font_family={font_family}
				font_variant={font_variant}
			/>
			<Color custom_color={custom_color} color={color} />
			<FontSize custom_font_size={custom_font_size} font_size={font_size} />
			<FontStyle
				custom_font_style={custom_font_style}
				font_style={font_style}
			/>
			<FontWeight
				custom_font_weight={custom_font_weight}
				font_weight={font_weight}
			/>
			<LineHeight
				custom_line_height={custom_line_height}
				line_height={line_height}
			/>
			<LetterSpacing
				custom_letter_spacing={custom_letter_spacing}
				letter_spacing={letter_spacing}
			/>
			<TextTransform
				custom_text_transform={custom_text_transform}
				text_transform={text_transform}
			/>
			<TextDecoration
				custom_text_decoration={custom_text_decoration}
				text_decoration={text_decoration}
			/>
		</Panel>
	);
};
