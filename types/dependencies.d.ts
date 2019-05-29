// Wordpress
declare const wp: {
	apiFetch: typeof import("./academic-bloggers-toolkit-master/wordpress__api-fetch");
	blocks: typeof import("./academic-bloggers-toolkit-master/wordpress__blocks");
	editPost: typeof import("./academic-bloggers-toolkit-master/wordpress__edit-post");
	element: typeof import("./academic-bloggers-toolkit-master/wordpress__element");
	plugins: typeof import("./academic-bloggers-toolkit-master/wordpress__plugins");
	i18n: typeof import("./academic-bloggers-toolkit-master/wordpress__i18n");
	data: typeof import("./academic-bloggers-toolkit-master/wordpress__data");
	components: typeof import("./academic-bloggers-toolkit-master/wordpress__components") & {
		Icon: React.ReactType;
	};
	compose: typeof import("./academic-bloggers-toolkit-master/wordpress__compose") & {
		withGlobalEvents: any;
	};
	blockEditor: typeof import("./academic-bloggers-toolkit-master/wordpress__block-editor");
	editor: Object;
	hooks: Object;
	blockLibrary: Object;
	customize: Object;
	parse: (arg: string) => Object[];
};

// Lodash
declare const lodash: typeof import("lodash");

// the_typography
declare const the_typography: {
	post_types: { slug: string; name: string }[];
};

// the_typography_page_data
declare const the_typography_page_data: State["page_data"];
