import l, {
	pr_store,
	cleanTypographies,
	typographies_per_page
} from "utils";

interface withDispatch {
	fetchTypographies: FunctionVoid;
}

const { isUndefined } = lodash;
const { withDispatch } = wp.data;

export default withDispatch<withDispatch>((dispatch, props, { select }) => {
	const {
		updateTypographiesVisibility,
		updateLoading,
		loadTypographies,
		increasePage,
		updateLastPage
	} = dispatch(pr_store);
	const { getTaxonomies } = select<SelectorsR["getTaxonomies"]>(pr_store);
	const { getPage } = select<SelectorsR["getPage"]>(pr_store);
	const { getPreviewerPageData } = select<SelectorsR["getPreviewerPageData"]>(
		pr_store
	);
	const previewer_page_data = getPreviewerPageData();
	const taxonomies = getTaxonomies();
	const next_page = getPage() + 1;

	return {
		fetchTypographies: async () => {
			updateLoading(true);

			let typographies_raw;
			typographies_raw = (await wp
				.apiFetch({
					parse: true,
					path: `/wp/v2/the_typography?per_page=${typographies_per_page}&page=${next_page}`
				})
				.catch(({ code }) => {
					if (code === "rest_post_invalid_page_number") {
						updateLastPage();
					}
				})) as Object;

			if (!isUndefined(typographies_raw)) {
				const typographies = cleanTypographies(typographies_raw, taxonomies);

				loadTypographies(typographies);

				updateTypographiesVisibility(previewer_page_data);

				increasePage();

				if (typographies.length < typographies_per_page) {
					updateLastPage();
				}
			}

			updateLoading(false);
		}
	};
});
