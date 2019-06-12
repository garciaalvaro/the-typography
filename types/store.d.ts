declare interface State {
	view: "single" | "index" | "info";
	is_loading: boolean;
	is_last_page: boolean;
	taxonomies: Taxonomies;
	page: number;
	page_data: {
		post_type: string | false;
		template: "single" | "index";
		is_front_page: boolean;
		is_404: boolean;
	};
	blocks: BlockType[];
	//
	typographies: Typography[];
	gfonts: GFont[];
	entities: { blocks: State["blocks"]; taxonomies: State["taxonomies"] };
	single: {
		typography: Typography | null;
		typography_unmodified: Typography | null;
		changed: boolean;
	};
	navigation: {
		view: State["view"];
		page: State["page"];
		is_last_page: State["is_last_page"];
		is_loading: State["is_loading"];
		previewer_post_type: State["page_data"]["post_type"];
		previewer_template: State["page_data"]["template"];
		previewer_is_404: State["page_data"]["is_404"];
		previewer_is_front_page: State["page_data"]["is_front_page"];
	};
}

declare interface Selectors {
	getPredefinedRaw: (state: State) => Typography[];
	getView: (state: State) => typeof state.view;
	getGFontsToLoad: (state: State) => GFontVariants[];
	getGFonts: (state: State) => typeof state.gfonts;
	getVisibleTypographiesId: (state: State) => number[];
	isSingleVisible: (state: State) => boolean;
	getTypographies: (state: State) => Typography[];
	isLoading: (state: State) => typeof state.is_loading;
	isLastPage: (state: State) => typeof state.is_last_page;
	getTaxonomies: (state: State) => typeof state.taxonomies;
	getPage: (state: State) => typeof state.page;
	getPreviewerPageData: (state: State) => typeof state.page_data;
	getBlock: (state: State, block_name: string) => BlockType | undefined;
	getBlocks: (state: State) => typeof state.blocks;
	hasSingleChanged: (state: State) => typeof state.single.changed;
	isSingleNewTypography: (state: State) => boolean;
	getSingle: (state: State) => typeof state.single.typography;
	getSingleId: (state: State) => number | null;
	getTypography: (state: State, id: Typography["id"]) => Typography | undefined;
}
declare interface SelectorsR {
	getPredefinedRaw: ReturnType<Selectors["getPredefinedRaw"]>;
	getView: ReturnType<Selectors["getView"]>;
	getGFontsToLoad: ReturnType<Selectors["getGFontsToLoad"]>;
	getGFonts: ReturnType<Selectors["getGFonts"]>;
	getVisibleTypographiesId: ReturnType<Selectors["getVisibleTypographiesId"]>;
	isSingleVisible: ReturnType<Selectors["isSingleVisible"]>;
	getSingleId: ReturnType<Selectors["getSingleId"]>;
	getTypographies: ReturnType<Selectors["getTypographies"]>;
	isLoading: ReturnType<Selectors["isLoading"]>;
	isLastPage: ReturnType<Selectors["isLastPage"]>;
	getSingle: ReturnType<Selectors["getSingle"]>;
	getTaxonomies: ReturnType<Selectors["getTaxonomies"]>;
	getPage: ReturnType<Selectors["getPage"]>;
	getPreviewerPageData: ReturnType<Selectors["getPreviewerPageData"]>;
	getBlock: ReturnType<Selectors["getBlock"]>;
	getBlocks: ReturnType<Selectors["getBlocks"]>;
	hasSingleChanged: ReturnType<Selectors["hasSingleChanged"]>;
	isSingleNewTypography: ReturnType<Selectors["isSingleNewTypography"]>;
}

declare interface Actions {
	resetProps: {
		type: "RESET_PROPS";
		values: TypographyStyleWithFont;
	};
	resetSelectorGroupProps: {
		type: "RESET_SELECTOR_GROUP_PROPS";
		values: TypographyStyle;
		id: SelectorGroup["id"];
	};
	updateProp: {
		type: "UPDATE_PROP";
		prop: keyof Typography;
		value: any;
	};
	updateBlocks: {
		type: "UPDATE_BLOCKS";
		blocks: BlockType[];
	};
	updateGFontsLoaded: {
		type: "UPDATE_G_FONTS_LOADED";
		fonts: GFontVariants[];
	};
	updateTaxonomyTerm: {
		type: "UPDATE_TAXONOMY_TERM";
		taxonomy_name: string;
		term: TaxonomyTerm;
	};
	loadTaxonomies: {
		type: "LOAD_TAXONOMIES";
		taxonomies: Taxonomies;
	};
	fetchTaxonomies: {
		type: "FETCH_TAXONOMIES";
		taxonomy_name: string;
	};
	addGFont: {
		type: "ADD_G_FONT";
		typography_id: Typography["id"];
		family: Typography["font_family"];
		variants: Typography["font_variant"];
	};
	updateTypographiesVisibility: {
		type: "UPDATE_TYPOGRAPHIES_VISIBILITY";
		page_data: State["page_data"];
	};
	updateSingleVisibility: {
		type: "UPDATE_SINGLE_VISIBILITY";
		page_data: State["page_data"];
	};
	updatePreviewerPageData: {
		type: "UPDATE_PREVIEWER_PAGE_DATA";
		page_data: State["page_data"];
	};
	goToIndex: {
		type: "GO_TO_INDEX";
	};
	goToSingle: {
		type: "GO_TO_SINGLE";
	};
	goToInfo: {
		type: "GO_TO_INFO";
	};
	increasePage: {
		type: "INCREASE_PAGE";
	};
	updateLastPage: {
		type: "UPDATE_LAST_PAGE";
	};
	emptySingle: {
		type: "EMPTY_SINGLE";
	};
	resetSingle: {
		type: "RESET_SINGLE";
	};
	addSelectorGroup: {
		type: "ADD_SELECTOR_GROUP";
	};
	fetchTypographies: {
		type: "FETCH_TYPOGRAPHIES";
	};
	updateLoading: {
		type: "UPDATE_LOADING";
		is_loading: boolean;
	};
	updateChanged: {
		type: "UPDATE_CHANGED";
		changed: boolean;
	};
	loadSingle: {
		type: "LOAD_SINGLE";
		typography: Typography;
	};
	updateSelectorGroupProp: {
		type: "UPDATE_SELECTOR_GROUP_PROP";
		prop: keyof SelectorGroup;
		value: any;
		id: SelectorGroup["id"];
	};
	updateSelectorProp: {
		type: "UPDATE_SELECTOR_PROP";
		prop: keyof Selector;
		value: any;
		id: Selector["id"];
		parent_id: SelectorGroup["id"];
	};
	addSelector: {
		type: "ADD_SELECTOR";
		parent_id: SelectorGroup["id"];
	};
	removeSelector: {
		type: "REMOVE_SELECTOR";
		id: Selector["id"];
		parent_id: SelectorGroup["id"];
	};
	removeSelectorGroup: {
		type: "REMOVE_SELECTOR_GROUP";
		id: SelectorGroup["id"];
	};
	removeTypography: {
		type: "REMOVE_TYPOGRAPHY";
		id: Typography["id"];
	};
	updateTypography: {
		type: "UPDATE_TYPOGRAPHY";
		typography: Typography;
	};
	loadTypography: {
		type: "LOAD_TYPOGRAPHY";
		typography: Typography;
	};
	loadTypographies: {
		type: "LOAD_TYPOGRAPHIES";
		typographies: Typography[];
	};
}

declare interface ActionCreators {
	removeTypography: (
		id: Actions["removeTypography"]["id"]
	) => Actions["removeTypography"];
	updateTypography: (
		typography: Actions["updateTypography"]["typography"]
	) => Actions["updateTypography"];
	loadTypography: (
		typography: Actions["loadTypography"]["typography"]
	) => Actions["loadTypography"];
	loadTypographies: (
		typographies: Actions["loadTypographies"]["typographies"]
	) => Actions["loadTypographies"];
	updateBlocks: (
		blocks: Actions["updateBlocks"]["blocks"]
	) => Actions["updateBlocks"];
	updateGFontsLoaded: (
		fonts: Actions["updateGFontsLoaded"]["fonts"]
	) => Actions["updateGFontsLoaded"];
	updateTaxonomyTerm: (
		taxonomy_name: Actions["updateTaxonomyTerm"]["taxonomy_name"],
		term: Actions["updateTaxonomyTerm"]["term"]
	) => Actions["updateTaxonomyTerm"];
	loadTaxonomies: (
		taxonomies: Actions["loadTaxonomies"]["taxonomies"]
	) => Actions["loadTaxonomies"];
	fetchTaxonomies: (
		taxonomy_name: Actions["fetchTaxonomies"]["taxonomy_name"]
	) => Actions["fetchTaxonomies"];
	addGFont: (
		typography_id: Actions["addGFont"]["typography_id"],
		family: Actions["addGFont"]["family"],
		variants: Actions["addGFont"]["variants"]
	) => Actions["addGFont"];
	updateTypographiesVisibility: (
		page_data: Actions["updateTypographiesVisibility"]["page_data"]
	) => Actions["updateTypographiesVisibility"];
	updateSingleVisibility: (
		page_data: Actions["updateSingleVisibility"]["page_data"]
	) => Actions["updateSingleVisibility"];
	updatePreviewerPageData: (
		page_data: Actions["updatePreviewerPageData"]["page_data"]
	) => Actions["updatePreviewerPageData"];
	goToIndex: () => Actions["goToIndex"];
	goToSingle: () => Actions["goToSingle"];
	goToInfo: () => Actions["goToInfo"];
	increasePage: () => Actions["increasePage"];
	updateLastPage: () => Actions["updateLastPage"];
	emptySingle: () => Actions["emptySingle"];
	resetSingle: () => Actions["resetSingle"];
	addSelectorGroup: () => Actions["addSelectorGroup"];
	fetchTypographies: () => Actions["fetchTypographies"];
	updateLoading: (
		is_loading: Actions["updateLoading"]["is_loading"]
	) => Actions["updateLoading"];
	updateChanged: (
		changed: Actions["updateChanged"]["changed"]
	) => Actions["updateChanged"];
	loadSingle: (
		typography: Actions["loadSingle"]["typography"]
	) => Actions["loadSingle"];
	resetProps: (
		values: Actions["resetProps"]["values"]
	) => Actions["resetProps"];
	resetSelectorGroupProps: (
		values: Actions["resetSelectorGroupProps"]["values"],
		id: Actions["resetSelectorGroupProps"]["id"]
	) => Actions["resetSelectorGroupProps"];
	updateProp: (
		prop: Actions["updateProp"]["prop"],
		value: Actions["updateProp"]["value"]
	) => Actions["updateProp"];
	updateSelectorGroupProp: (
		prop: Actions["updateSelectorGroupProp"]["prop"],
		value: Actions["updateSelectorGroupProp"]["value"],
		id: Actions["updateSelectorGroupProp"]["id"]
	) => Actions["updateSelectorGroupProp"];
	updateSelectorProp: (
		prop: Actions["updateSelectorProp"]["prop"],
		value: Actions["updateSelectorProp"]["value"],
		id: Actions["updateSelectorProp"]["id"],
		parent_id: Actions["updateSelectorProp"]["parent_id"]
	) => Actions["updateSelectorProp"];
	addSelector: (
		parent_id: Actions["addSelector"]["parent_id"]
	) => Actions["addSelector"];
	removeSelector: (
		id: Actions["removeSelector"]["id"],
		parent_id: Actions["removeSelector"]["parent_id"]
	) => Actions["removeSelector"];
	removeSelectorGroup: (
		id: Actions["removeSelectorGroup"]["id"]
	) => Actions["removeSelectorGroup"];
}
