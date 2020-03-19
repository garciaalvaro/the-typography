type PreviewerStyle = {
	id: string;
	typography_id: number;
	selector: string;
	css: string;
};

type FontToLoad = {
	family: string;
	variants_to_load: FontVariant[];
};
