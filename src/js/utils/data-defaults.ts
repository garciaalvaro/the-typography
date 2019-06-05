import uuid from "uuid/v4";

const typography_style_defaults: TypographyStyle = {
	custom_font_size: false,
	font_size: 15,
	custom_line_height: false,
	line_height: 1.2,
	custom_letter_spacing: false,
	letter_spacing: 0,
	custom_color: false,
	color: "",
	custom_font_weight: false,
	font_weight: "400",
	custom_font_style: false,
	font_style: "normal",
	custom_text_transform: false,
	text_transform: "none",
	custom_text_decoration: false,
	text_decoration: "none"
};

const typography_style_selector_group_defaults: TypographyStyleSelectorGroup = {
	custom_typography: false,
	force_styles: false,
	...typography_style_defaults
};

const typography_style_root_defaults: TypographyStyleWithFont = {
	custom_font: false,
	font_family: "",
	font_variant: ["400"],
	...typography_style_defaults
};

const selector_defaults: Omit<Selector, "id"> = {
	fixed: false,
	selector_type: "text",
	text_selector: "",
	block_name: "",
	block_title: "",
	block_selector_root: "",
	block_selector_extra: "",
	block_element_label: ""
};

const selector_group_defaults: Omit<SelectorGroup, "id"> = {
	description: "",
	fixed: false,
	typography_style_defaults: null,
	custom_title: false,
	title: "",
	force_styles: false,
	custom_parent_selector: false,
	parent_selector: "",
	custom_typography: false,
	selectors: [{ ...selector_defaults, id: uuid() }],
	// Typography
	...typography_style_defaults
};

const typography_defaults: Typography = {
	namespace: "",
	namespace_title: "",
	description: "",
	context_fixed: false,
	typography_style_defaults: null,
	id: 0,
	title: "",
	is_visible: false,
	// Selector groups
	selector_groups: [],
	// Context
	context_type: "all_site",
	context_post_type: ["post"],
	context_post_type_template: ["index", "single"],
	// Typography
	custom_font: false,
	font_family: "",
	font_variant: ["400"],
	...typography_style_defaults
};

export {
	selector_defaults,
	selector_group_defaults,
	typography_defaults,
	typography_style_root_defaults,
	typography_style_selector_group_defaults
};
