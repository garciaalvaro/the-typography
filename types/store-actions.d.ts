interface ActionWithPayload<T, P> {
	type: T;
	payload: P;
}
interface ActionNoPayload<T> {
	type: T;
}

interface ActionCreatorWithPayload<A extends ActionsWithPayload> {
	(payload: A["payload"]): A;
}
interface ActionCreatorNoPayload<A extends ActionsNoPayload> {
	(): A;
}

type ActionsWithPayload =
	| ActionSetDownloadedFonts
	| ActionAddDownloadedFont
	| ActionRemoveDownloadedFont
	| ActionSetFontsLoaded
	| ActionAddSelector
	| ActionLoadSingle
	| ActionResetSelectorGroupStyle
	| ActionSetHasChangedSingle
	| ActionSetProp
	| ActionRemoveSelector
	| ActionRemoveSelectorGroup
	| ActionUpdateTypography
	| ActionOpenTab
	| ActionSetReachedLastPage
	| ActionSetLoading
	| ActionSetPreviewerPageData
	| ActionSetView
	| ActionAddTaxonomyTerm
	| ActionSetTaxonomies
	| ActionAddTypographies
	| ActionRemoveTypography
	| ActionSetTypographyActive;

type ActionsNoPayload =
	| ActionAddSelectorGroup
	| ActionUndoSingle
	| ActionResetSingle
	| ActionResetSingleStyle
	| ActionIncreaseCurrentPage;

type Actions =
	| ActionSetDownloadedFonts
	| ActionAddDownloadedFont
	| ActionRemoveDownloadedFont
	| ActionSetFontsLoaded
	| ActionAddSelector
	| ActionLoadSingle
	| ActionResetSelectorGroupStyle
	| ActionSetHasChangedSingle
	| ActionSetProp
	| ActionRemoveSelector
	| ActionRemoveSelectorGroup
	| ActionUpdateTypography
	| ActionOpenTab
	| ActionSetReachedLastPage
	| ActionSetLoading
	| ActionSetPreviewerPageData
	| ActionSetView
	| ActionAddTaxonomyTerm
	| ActionSetTaxonomies
	| ActionAddTypographies
	| ActionRemoveTypography
	| ActionSetTypographyActive
	| ActionAddSelectorGroup
	| ActionUndoSingle
	| ActionResetSingle
	| ActionResetSingleStyle
	| ActionIncreaseCurrentPage;

interface ActionCreators
	extends ActionCreatorsDownloadedFonts,
		ActionCreatorsNavigation,
		ActionCreatorsSingle,
		ActionCreatorsTaxonomies,
		ActionCreatorsTypographies {}

// Downloaded Fonts
interface ActionCreatorsDownloadedFonts {
	setDownloadedFonts: ActionCreatorWithPayload<ActionSetDownloadedFonts>;
	addDownloadedFont: ActionCreatorWithPayload<ActionAddDownloadedFont>;
	removeDownloadedFont: ActionCreatorWithPayload<ActionRemoveDownloadedFont>;
}
type ActionSetDownloadedFonts = ActionWithPayload<
	"SET_DOWNLOADED_FONTS",
	State["downloaded_fonts"]
>;
type ActionAddDownloadedFont = ActionWithPayload<
	"ADD_DOWNLOADED_FONT",
	DownloadedFont
>;
type ActionRemoveDownloadedFont = ActionWithPayload<
	"REMOVE_DOWNLOADED_FONT",
	DownloadedFont["value"]
>;

// Fonts
interface ActionCreatorsFonts {
	setFontsLoaded: ActionCreatorWithPayload<ActionSetFontsLoaded>;
}
type ActionSetFontsLoaded = ActionWithPayload<
	"SET_FONTS_LOADED",
	{ family: string; variants: FontVariant[] }[]
>;

// Single
interface ActionCreatorsSingle {
	addSelector: ActionCreatorWithPayload<ActionAddSelector>;
	addSelectorGroup: ActionCreatorNoPayload<ActionAddSelectorGroup>;
	loadSingle: ActionCreatorWithPayload<ActionLoadSingle>;
	undoSingle: ActionCreatorNoPayload<ActionUndoSingle>;
	resetSingle: ActionCreatorNoPayload<ActionResetSingle>;
	resetSingleStyle: ActionCreatorNoPayload<ActionResetSingleStyle>;
	resetSelectorGroupStyle: ActionCreatorWithPayload<
		ActionResetSelectorGroupStyle
	>;
	setHasChangedSingle: ActionCreatorWithPayload<ActionSetHasChangedSingle>;
	setProp: ActionCreatorWithPayload<ActionSetProp>;
	removeSelector: ActionCreatorWithPayload<ActionRemoveSelector>;
	removeSelectorGroup: ActionCreatorWithPayload<ActionRemoveSelectorGroup>;
	updateTypography: ActionCreatorWithPayload<ActionUpdateTypography>;
}
type ActionAddSelector = ActionWithPayload<"ADD_SELECTOR", SelectorGroup["id"]>;
type ActionAddSelectorGroup = ActionNoPayload<"ADD_SELECTOR_GROUP">;
type ActionLoadSingle = ActionWithPayload<"LOAD_SINGLE", Typography["id"]>;
type ActionUndoSingle = ActionNoPayload<"UNDO_SINGLE">;
type ActionResetSingle = ActionNoPayload<"RESET_SINGLE">;
type ActionResetSingleStyle = ActionNoPayload<"RESET_SINGLE_STYLE">;
type ActionResetSelectorGroupStyle = ActionWithPayload<
	"RESET_SELECTOR_GROUP_STYLE",
	SelectorGroup["id"]
>;
type ActionSetHasChangedSingle = ActionWithPayload<
	"SET_HAS_CHANGED_SINGLE",
	boolean
>;
type ActionSetProp = ActionWithPayload<
	"SET_PROP",
	{
		prop_key: keyof Selector | keyof SelectorGroup | keyof Typography;
		prop_value: any;
		group_id?: SelectorGroup["id"];
		selector_id?: Selector["id"];
	}
>;
type ActionRemoveSelector = ActionWithPayload<
	"REMOVE_SINGLE_SELECTOR",
	{
		group_id: SelectorGroup["id"];
		selector_id: Selector["id"];
	}
>;
type ActionRemoveSelectorGroup = ActionWithPayload<
	"REMOVE_SINGLE_SELECTOR_GROUP",
	SelectorGroup["id"]
>;
type ActionUpdateTypography = ActionWithPayload<
	"UPDATE_TYPOGRAPHY",
	Typography
>;

// Navigation
interface ActionCreatorsNavigation {
	increaseCurrentPage: ActionCreatorNoPayload<ActionIncreaseCurrentPage>;
	openTab: ActionCreatorWithPayload<ActionOpenTab>;
	setReachedLastPage: ActionCreatorWithPayload<ActionSetReachedLastPage>;
	setLoading: ActionCreatorWithPayload<ActionSetLoading>;
	setPreviewerPageData: ActionCreatorWithPayload<ActionSetPreviewerPageData>;
	setView: ActionCreatorWithPayload<ActionSetView>;
}
type ActionIncreaseCurrentPage = ActionNoPayload<"INCREASE_CURRENT_PAGE">;
type ActionOpenTab = ActionWithPayload<"OPEN_TAB", State["tab_open"]>;
type ActionSetReachedLastPage = ActionWithPayload<
	"SET_REACHED_LAST_PAGE",
	State["reached_last_page"]
>;
type ActionSetLoading = ActionWithPayload<"SET_LOADING", State["is_loading"]>;
type ActionSetPreviewerPageData = ActionWithPayload<
	"SET_PREVIEWER_PAGE_DATA",
	State["previewer_page_data"]
>;
type ActionSetView = ActionWithPayload<"SET_VIEW", State["view"]>;

// Taxonomies
interface ActionCreatorsTaxonomies {
	addTaxonomyTerm: ActionCreatorWithPayload<ActionAddTaxonomyTerm>;
	setTaxonomies: ActionCreatorWithPayload<ActionSetTaxonomies>;
}
type ActionAddTaxonomyTerm = ActionWithPayload<
	"ADD_TAXONOMY_TERM",
	{ taxonomy_name: string; term: TaxonomyTerm }
>;
type ActionSetTaxonomies = ActionWithPayload<"SET_TAXONOMIES", Taxonomies>;

// Typographies
interface ActionCreatorsTypographies {
	addTypographies: ActionCreatorWithPayload<ActionAddTypographies>;
	removeTypography: ActionCreatorWithPayload<ActionRemoveTypography>;
	setTypographyActive: ActionCreatorWithPayload<ActionSetTypographyActive>;
}
type ActionAddTypographies = ActionWithPayload<
	"ADD_TYPOGRAPHIES",
	Typography[]
>;
type ActionRemoveTypography = ActionWithPayload<
	"REMOVE_TYPOGRAPHY",
	Typography["id"]
>;
type ActionSetTypographyActive = ActionWithPayload<
	"SET_TYPOGRAPHY_ACTIVE",
	{ id: Typography["id"]; value: boolean }
>;
