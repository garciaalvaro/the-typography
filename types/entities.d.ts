type BlockType = {
	value: string;
	label: string;
	icon: string | React.ReactNode;
	elements: BlockTypeDataElement[];
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TaxonomyTermRaw = Record<any, string> & TaxonomyTerm;

type TaxonomyTerm = {
	id: number;
	slug: string;
	name: string;
};

type Taxonomies = {
	[key: string]: TaxonomyTerm[];
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PostTypeRaw = Record<any, string> & {
	slug: string;
	name: string;
	viewable: boolean;
};

type PostType = {
	value: string;
	label: string;
};

type DownloadedFontRaw = {
	font: string;
	woff: string;
	woff2: string;
	ttf: string;
	svg: string;
	eot: string;
};

type DownloadedFont = {
	value: string;
	label: string;
	is_downloaded: boolean;
};
