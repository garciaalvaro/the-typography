type State = {
	tab_open: "typographies" | "fonts";
	view: "single" | "index";
	is_loading: boolean;
	reached_last_page: boolean;
	taxonomies: Taxonomies;
	current_page: number;
	previewer_page_data: {
		post_type: string | false;
		template: "single" | "index";
		is_front_page: boolean;
		is_404: boolean;
	};
	typographies: Typography[];
	single: Typography;
	has_changed_single: boolean;
	fonts: {
		family: string;
		variants: FontVariant[];
		variants_loaded: FontVariant[];
	}[];
	downloaded_fonts: DownloadedFont[];
};
