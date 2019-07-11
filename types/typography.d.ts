interface TypographyRaw {
	id: number;
	title: { rendered: string };
	context_type: number[];
	context_post_type: number[];
	context_post_type_template: number[];
	meta: Object & {
		_typography_style_defaults: string;
		selector_groups: string;
		custom_font_size: boolean;
		font_size: number;
		custom_line_height: boolean;
		line_height: number;
		custom_letter_spacing: boolean;
		letter_spacing: number;
		custom_color: boolean;
		color: string;
		custom_font_weight: boolean;
		font_weight: FontWeight;
		custom_font_style: boolean;
		font_style: FontStyle;
		custom_text_transform: boolean;
		text_transform: TextTransform;
		custom_text_decoration: boolean;
		text_decoration: TextDecoration;
	};
}

interface TypographyRawToUpload
	extends Omit<TypographyRaw, "title" | "meta" | "id"> {
	id?: Typography["id"];
	title: string;
	meta: Partial<TypographyRaw["meta"]>;
	status: "publish";
}

type TextDecoration = "none" | "line-through" | "overline" | "underline";

type TextTransform = "none" | "capitalize" | "uppercase" | "lowercase";

type FontWeight =
	| "100"
	| "200"
	| "300"
	| "400"
	| "500"
	| "600"
	| "700"
	| "800"
	| "900";

interface Font {
	family: string;
	variants: FontVariant[];
	subsets: string[];
}

type Fonts = Record<string, Font>;

type FontVariant =
	| "100"
	| "100i"
	| "200"
	| "200i"
	| "300"
	| "300i"
	| "400"
	| "400i"
	| "500"
	| "500i"
	| "600"
	| "600i"
	| "700"
	| "700i"
	| "800"
	| "800i"
	| "900"
	| "900i";

interface FontFamily {
	value: string;
	label: string;
}

type FontStyle = "italic" | "normal" | "oblique";

interface SelectorRaw extends Partial<Selector> {}

interface Selector {
	_can_be_removed: boolean;
	id: string;
	// selector_type: "text" | "block";
	text_selector: string;
	block_name: string;
	block_title: string;
	block_selector_root: string;
	block_selector_extra: string;
	// block_element_label: string;
}

interface SelectorGroupRaw extends Partial<Omit<SelectorGroup, "selectors">> {
	selectors: SelectorRaw[];
}

interface SelectorGroup extends SelectorGroupStyle {
	_id: string;
	_description: string;
	_typography_style_defaults: SelectorGroupStyle | null;
	id: string;
	selectors: Selector[];
	custom_title: boolean;
	title: string;
	force_styles: boolean;
	custom_parent_selector: boolean;
	parent_selector: string;
	custom_typography: boolean;
}

type ContextType = "all_site" | "post_type" | "front_page" | "404_page";

interface Typography extends TypographyStyle {
	is_active: boolean;
	_id: string;
	_namespace: string;
	_namespace_title: string;
	_description: string;
	_context_fixed: boolean;
	_typography_style_defaults: TypographyStyle | null;
	id: number;
	title: string;
	is_visible: boolean;
	context_type: ContextType;
	context_post_type: string[];
	context_post_type_template: ("index" | "single")[];
	selector_groups: SelectorGroup[];
}
