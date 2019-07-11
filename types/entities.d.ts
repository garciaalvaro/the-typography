interface BlockType {
	value: string;
	label: string;
	icon: string | React.ReactNode;
	elements: BlockTypeDataElement[];
}

interface TaxonomyTermRaw extends Object, TaxonomyTerm {}

interface TaxonomyTerm {
	id: number;
	slug: string;
	name: string;
}

interface Taxonomies {
	[key: string]: TaxonomyTerm[];
}

interface PostTypeRaw extends Object {
	slug: string;
	name: string;
	viewable: boolean;
}

interface PostType {
	value: string;
	label: string;
}

interface DownloadedFontRaw {
	font: string;
	woff: string;
	woff2: string;
	ttf: string;
	svg: string;
	eot: string;
}

interface DownloadedFont {
	value: string;
	label: string;
	is_downloaded: boolean;
}
