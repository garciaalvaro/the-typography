// Wordpress
declare const wp: {
	apiFetch: typeof import("./academic-bloggers-toolkit-master/wordpress__api-fetch");
	blocks: typeof import("./academic-bloggers-toolkit-master/wordpress__blocks");
	editPost: typeof import("./academic-bloggers-toolkit-master/wordpress__edit-post");
	element: typeof import("./academic-bloggers-toolkit-master/wordpress__element");
	plugins: Object;
	i18n: typeof import("./academic-bloggers-toolkit-master/wordpress__i18n");
	hooks: Object;
	data: typeof import("./academic-bloggers-toolkit-master/wordpress__data");
	components: Object;
	editor: Object;
	compose: typeof import("./academic-bloggers-toolkit-master/wordpress__compose");
	blockEditor: typeof import("./academic-bloggers-toolkit-master/wordpress__block-editor");
	parse: (arg: string) => Object[];
};

// Lodash
declare const lodash: typeof import("lodash");
