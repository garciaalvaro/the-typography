declare interface TypographyStyleCamelCase {
	fontSize: TypographyStyleProps["font_size"];
	lineHeight: TypographyStyleProps["line_height"];
	letterSpacing: TypographyStyleProps["letter_spacing"];
	color: TypographyStyleProps["color"];
	fontWeight: TypographyStyleProps["font_weight"];
	fontStyle: TypographyStyleProps["font_style"];
	textTransform: TypographyStyleProps["text_transform"];
	textDecoration: TypographyStyleProps["text_decoration"];
}

declare interface TypographyStyleSelectorGroup extends TypographyStyle {
	custom_typography: boolean;
	force_styles: boolean;
}

declare interface TypographyStyleWithFont extends TypographyStyle {
	custom_font: boolean;
	font_family: string;
	font_variant: string[];
}

declare interface TypographyStyle
	extends TypographyStyleCustomProps,
		TypographyStyleProps {}
// declare type TypographyStyle = TypographyStyleCustomProps &
// 	TypographyStyleProps;

declare interface TypographyStyleCustomProps {
	custom_font_size: boolean;
	custom_line_height: boolean;
	custom_letter_spacing: boolean;
	custom_color: boolean;
	custom_font_weight: boolean;
	custom_font_style: boolean;
	custom_text_transform: boolean;
	custom_text_decoration: boolean;
}

declare interface TypographyStyleProps {
	font_size: number;
	line_height: number;
	letter_spacing: number;
	color: string;
	font_weight: string;
	font_style: string;
	text_transform: string;
	text_decoration: string;
}

declare interface Style {
	font_family?: Typography["font_family"];
	font_size?: Typography["font_size"];
	line_height?: Typography["line_height"];
	letter_spacing?: Typography["letter_spacing"];
	color?: Typography["color"];
	font_weight?: Typography["font_weight"];
	font_style?: Typography["font_style"];
	text_transform?: Typography["text_transform"];
	text_decoration?: Typography["text_decoration"];
	selector_groups?: Typography["selector_groups"];
}

declare interface Selector {
	fixed: boolean;
	id: string;
	selector_type: "text" | "block";
	text_selector: string;
	block_name: string;
	block_title: string;
	block_selector_root: string;
	block_selector_extra: string;
	block_element_label: string;
}

declare interface SelectorGroup extends TypographyStyle {
	fixed: boolean;
	typography_style_defaults: TypographyStyle | null;
	id: string;
	selectors: Selector[];
	custom_title: boolean;
	title: string;
	force_styles: boolean;
	custom_parent_selector: boolean;
	parent_selector: string;
	custom_typography: boolean;
}

declare interface Typography extends TypographyStyleWithFont {
	context_fixed: boolean;
	typography_style_defaults: TypographyStyleWithFont | null;
	id: number;
	title: string;
	is_visible: boolean;
	context_type: string;
	context_post_type: string[];
	context_post_type_template: string[];
	selector_groups: SelectorGroup[];
}
