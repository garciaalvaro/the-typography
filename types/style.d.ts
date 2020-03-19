type StyleCustomProps = {
	custom_font_size: boolean;
	custom_line_height: boolean;
	custom_letter_spacing: boolean;
	custom_color: boolean;
	custom_font_weight: boolean;
	custom_font_style: boolean;
	custom_text_transform: boolean;
	custom_text_decoration: boolean;
};

type StyleNonCustomProps = {
	font_size: number;
	line_height: number;
	letter_spacing: number;
	color: string;
	font_weight: FontWeight;
	font_style: FontStyle;
	text_transform: TextTransform;
	text_decoration: TextDecoration;
};

type Style = StyleCustomProps & StyleNonCustomProps;

type SelectorGroupStyle = Style & {
	custom_typography: boolean;
	force_styles: boolean;
};

type TypographyStyle = Style & {
	custom_font: boolean;
	font_family: string;
	font_variant: FontVariant[];
};
