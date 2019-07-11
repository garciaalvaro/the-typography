type StoreSelector<T, P = null> = (state: State, parameter: P) => T;

interface Selectors
	extends SelectorsDownloadedFonts,
		SelectorsTypographies,
		SelectorsFonts,
		SelectorsTaxonomies,
		SelectorsSingle,
		SelectorsNavigation {}

interface SelectorsDownloadedFonts {
	getDownloadedFonts: StoreSelector<DownloadedFont[]>;
}

interface SelectorsTypographies {
	getParentSelector: StoreSelector<
		SelectorGroup["parent_selector"],
		{ typography_id?: Typography["id"]; group_id: SelectorGroup["id"] }
	>;
	getSelectors: StoreSelector<
		string[],
		{ typography_id?: Typography["id"]; group_id: SelectorGroup["id"] }
	>;
	getForceStyles: StoreSelector<
		SelectorGroup["force_styles"],
		{ typography_id?: Typography["id"]; group_id: SelectorGroup["id"] }
	>;
	isPredefined: StoreSelector<boolean, Typography["id"]>;
	getTypographies: StoreSelector<Typography[], boolean>;
	getVisibleIds: StoreSelector<
		{ typography_id: Typography["id"]; groups_id: SelectorGroup["id"][] }[]
	>;
	getColorProps: StoreSelector<
		{
			custom_color: Typography["custom_color"];
			color: Typography["color"];
		} | null,
		{ typography_id?: Typography["id"]; group_id?: SelectorGroup["id"] }
	>;
	getStyleProps: StoreSelector<
		TypographyStyle | SelectorGroupStyle | null,
		{ typography_id?: Typography["id"]; group_id?: SelectorGroup["id"] }
	>;
	getPredefinedProps: StoreSelector<
		{
			_description: Typography["_description"];
			_namespace: Typography["_namespace"];
			_namespace_title: Typography["_namespace_title"];
		} | null,
		Typography["id"]
	>;
	getTitle: StoreSelector<Typography["title"] | null, Typography["id"]>;
	getSelectorGroups: StoreSelector<SelectorGroup[] | null, Typography["id"]>;
	getTypographyStyleDefaults: StoreSelector<
		| Typography["_typography_style_defaults"]
		| SelectorGroup["_typography_style_defaults"]
		| null,
		{ typography_id?: Typography["id"]; group_id?: SelectorGroup["id"] }
	>;
	getFontProps: StoreSelector<
		{
			custom_font: Typography["custom_font"];
			font_family: Typography["font_family"];
			font_variant: Typography["font_variant"];
		} | null,
		Typography["id"]
	>;
	getContextProps: StoreSelector<
		{
			context_type: Typography["context_type"];
			context_post_type: Typography["context_post_type"];
			context_post_type_template: Typography["context_post_type_template"];
			_context_fixed: Typography["_context_fixed"];
		} | null,
		Typography["id"]
	>;
}

interface SelectorsFonts {
	getFonts: StoreSelector<State["fonts"]>;
	getFontsToLoad: StoreSelector<FontToLoad[]>;
}

interface SelectorsTaxonomies {
	getTaxonomies: StoreSelector<Taxonomies>;
}

interface SelectorsSingle {
	hasChangedSingle: StoreSelector<State["has_changed_single"]>;
	isActiveSingle: StoreSelector<Typography["is_active"]>;
	isNewSingle: StoreSelector<boolean>;
	isPredefinedSingle: StoreSelector<boolean>;
	isVisibleSingle: StoreSelector<Typography["is_visible"]>;
	getSingle: StoreSelector<Typography>;
	getSingleId: StoreSelector<Typography["id"]>;
}

interface SelectorsNavigation {
	reachedLastPage: StoreSelector<State["reached_last_page"]>;
	isLoading: StoreSelector<State["is_loading"]>;
	getCurrentPage: StoreSelector<State["current_page"]>;
	getPreviewerPageData: StoreSelector<State["previewer_page_data"]>;
	getTabOpen: StoreSelector<State["tab_open"]>;
	getView: StoreSelector<State["view"]>;
}
