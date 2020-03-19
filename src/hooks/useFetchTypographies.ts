import apiFetch from "@wordpress/api-fetch";
import { useEffect } from "@wordpress/element";
import { addQueryArgs } from "@wordpress/url";
import { useDispatch, useSelect } from "@wordpress/data";

import { store_slug, typographies_per_page } from "utils/data/plugin";
import { prepareTypographies } from "utils/tools/prepareTypographies";

export const useFetchTypographies = () => {
	const {
		setReachedLastPage,
		addTypographies,
		setLoading,
		increaseCurrentPage
	} = useDispatch(store_slug);

	const taxonomies = useSelect<State["taxonomies"]>(select =>
		select(store_slug).getTaxonomies()
	);

	const current_page = useSelect<State["current_page"]>(select =>
		select(store_slug).getCurrentPage()
	);

	// Once the taxonomies are fetched we can fetch the typographies
	useEffect(() => {
		if (!taxonomies.context_type) {
			return;
		}

		// Fetch typographies.
		const fetchTypographies = async () => {
			setLoading(true);

			// Fetch Typography cpts
			// TODO: handle 404
			const typographies_raw = await apiFetch<TypographyRaw[]>({
				path: addQueryArgs("/wp/v2/the_typography", {
					per_page: typographies_per_page,
					page: current_page + 1
				})
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
			}).catch(({ code }: any) => {
				if (code === "rest_post_invalid_page_number") {
					setReachedLastPage(true);
				}
			});

			if (typographies_raw) {
				const typographies = prepareTypographies(
					typographies_raw,
					taxonomies
				);

				addTypographies(typographies);

				increaseCurrentPage();

				if (typographies.length < typographies_per_page) {
					setReachedLastPage(true);
				}
			}

			setLoading(false);
		};

		fetchTypographies();
	}, [taxonomies]);
};
