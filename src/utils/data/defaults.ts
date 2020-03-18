import { v4 as uuid } from "uuid";
import { is_customizer } from "utils/data/plugin";

export const generateDefaultStyle = (): Style => ({
	custom_color: false,
	color: "",
	custom_font_size: false,
	font_size: 15,
	custom_line_height: false,
	line_height: 1.2,
	custom_letter_spacing: false,
	letter_spacing: 0,
	custom_font_weight: false,
	font_weight: "400",
	custom_font_style: false,
	font_style: "normal",
	custom_text_transform: false,
	text_transform: "none",
	custom_text_decoration: false,
	text_decoration: "none"
});

export const generateDefaultSelectorGroupStyle = (): SelectorGroupStyle => ({
	custom_typography: false,
	force_styles: false,
	...generateDefaultStyle()
});

export const generateDefaultTypographyStyle = (): TypographyStyle => ({
	custom_font: false,
	font_family: "",
	font_variant: ["400"],
	...generateDefaultStyle()
});

export const generateDefaultSelector = (): Selector => ({
	id: uuid(),
	_can_be_removed: true,
	text_selector: "",
	block_name: "",
	block_title: "",
	block_selector_root: "",
	block_selector_extra: ""
});

export const generateDefaultSelectorGroup = (): SelectorGroup => ({
	id: uuid(),
	_typography_style_defaults: null,
	_id: "",
	_description: "",
	custom_title: false,
	title: "",
	force_styles: false,
	custom_parent_selector: false,
	parent_selector: "",
	custom_typography: false,
	selectors: [generateDefaultSelector()],
	// Typography
	...generateDefaultSelectorGroupStyle()
});

export const generateDefaultTypography = (): Typography => ({
	_typography_style_defaults: null,
	_id: "",
	_namespace: "",
	_namespace_title: "",
	_description: "",
	_context_fixed: false,
	is_active: true,
	id: 0,
	title: "",
	is_visible: !!is_customizer,
	// Selector groups
	selector_groups: [],
	// Context
	context_type: "all_site",
	context_post_type: ["post"],
	context_post_type_template: ["index", "single"],
	// Typography
	...generateDefaultTypographyStyle()
});
