interface PreviewerStyle {
	id: string;
	typography_id: number;
	selector: string;
	css: string;
}

interface FontToLoad {
	family: string;
	variants_to_load: FontVariant[];
}
