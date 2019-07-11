interface StyleCustomProps {
	custom_font_size: boolean;
	custom_line_height: boolean;
	custom_letter_spacing: boolean;
	custom_color: boolean;
	custom_font_weight: boolean;
	custom_font_style: boolean;
	custom_text_transform: boolean;
	custom_text_decoration: boolean;
}

interface StyleNonCustomProps {
	font_size: number;
	line_height: number;
	letter_spacing: number;
	color: string;
	font_weight: FontWeight;
	font_style: FontStyle;
	text_transform: TextTransform;
	text_decoration: TextDecoration;
}

interface Style extends StyleCustomProps, StyleNonCustomProps {}

interface SelectorGroupStyle extends Style {
	custom_typography: boolean;
	force_styles: boolean;
}

interface TypographyStyle extends Style {
	custom_font: boolean;
	font_family: string;
	font_variant: FontVariant[];
}
