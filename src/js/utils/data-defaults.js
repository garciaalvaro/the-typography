const selector_defaults = {
	selector_type: "text",
	text_selector: "",
	block_name: "",
	block_title: "",
	block_selector_root: "",
	block_selector_extra: "",
	block_element_label: ""
};

const selector_group_defaults = {
	custom_title: false,
	title: "",
	force_styles: false,
	custom_parent_selector: false,
	parent_selector: "",
	custom_typography: false,
	selectors: [],
	// Typography
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
};

const typography_defaults = {
	id: 0,
	title: "",
	style: "",
	is_visible: false,
	// Typography
	custom_font: false,
	font_family: "",
	font_variant: ["400"],
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
	text_decoration: "none",
	// Selector groups
	selector_groups: [],
	// Context
	context_type: "all_site",
	context_post_type: ["post"],
	context_post_type_template: ["index", "single"]
};

export { selector_defaults, selector_group_defaults, typography_defaults };
