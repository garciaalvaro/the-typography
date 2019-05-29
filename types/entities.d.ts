declare interface BlockType {
	name: string;
	title: string;
	icon: string | React.ReactNode;
	elements: { value: string; label: string; selector: string }[];
}

declare interface GFont {
	typographies_id: number[];
	id: string;
	family: string;
	variants: { id: string; loaded: boolean; variant: string }[];
}

declare interface GFontVariants extends Omit<GFont, "variants"> {
	variants: string[];
}

declare interface TaxonomyTerm {
	id: string;
	slug: string;
	name: string;
}

declare interface Taxonomies {
	[key: string]: TaxonomyTerm[];
}
