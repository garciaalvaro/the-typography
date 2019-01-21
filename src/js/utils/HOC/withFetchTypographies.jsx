import l, {
	pr_store,
	cleanTypographies,
	typographies_per_page
} from "../index";

const { isUndefined } = lodash;

const { compose } = wp.compose;
const { withDispatch } = wp.data;

const withFetchTypographies = WrappedComponent => props => (
	<WrappedComponent {...props} />
);

export default compose([
	withDispatch((dispatch, props, { select }) => {
		const {
			updateTypographiesVisibility,
			updateLoading,
			loadTypographies,
			increasePage,
			updateLastPage
		} = dispatch(pr_store);
		const { getTaxonomies, getPage, getPreviewerData } = select(pr_store);
		const previewer_data = getPreviewerData();
		const taxonomies = getTaxonomies();
		const next_page = getPage() + 1;

		return {
			fetchTypographies: async () => {
				updateLoading(true);

				let typographies;
				typographies = await wp
					.apiFetch({
						path: `/wp/v2/the_typography?per_page=${typographies_per_page}&page=${next_page}`
					})
					.catch(({ code }) => {
						if (code === "rest_post_invalid_page_number") {
							updateLastPage();
						}
					});

				if (!isUndefined(typographies)) {
					typographies = cleanTypographies(typographies, taxonomies);

					loadTypographies(typographies);

					updateTypographiesVisibility(previewer_data);

					increasePage();

					if (typographies.length < typographies_per_page) {
						updateLastPage();
					}
				}

				updateLoading(false);
			}
		};
	}),
	withFetchTypographies
]);
