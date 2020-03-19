import apiFetch from "@wordpress/api-fetch";
import { useDispatch, useSelect } from "@wordpress/data";
import { useEffect } from "@wordpress/element";

import { store_slug } from "utils/data/plugin";
import { prepareTaxonomy } from "utils/tools/prepareTaxonomies";

export const useFetchTaxonomies = () => {
	const { setTaxonomies } = useDispatch(store_slug);

	const current_page = useSelect<State["current_page"]>(select =>
		select(store_slug).getCurrentPage()
	);

	// When the component mounts, fetch taxonomies
	// (if it hasnt mounted before)
	useEffect(() => {
		if (current_page > 0) {
			return;
		}

		// Fetch taxonomies data.
		const fetchTaxonomies = async () => {
			// TODO: handle 404
			const context_type_raw = await apiFetch<TaxonomyTermRaw[]>({
				path: "/wp/v2/context_type"
			});

			const context_type = prepareTaxonomy(context_type_raw);

			const context_post_type_raw = await apiFetch<TaxonomyTermRaw[]>({
				path: "/wp/v2/context_post_type"
			});

			const context_post_type = prepareTaxonomy(context_post_type_raw);

			const context_post_type_template_raw = await apiFetch<
				TaxonomyTermRaw[]
			>({
				path: "/wp/v2/context_post_type_template"
			});

			const context_post_type_template = prepareTaxonomy(
				context_post_type_template_raw
			);

			setTaxonomies({
				context_type,
				context_post_type,
				context_post_type_template
			});
		};

		fetchTaxonomies();
	}, []);
};
