import { pick } from "lodash";

import { getTermSlug, getTermSlugs } from "utils/tools/terms";

export const prepareTaxonomyTerm = (term: TaxonomyTermRaw): TaxonomyTerm =>
	pick(term, ["id", "slug", "name"]);

export const prepareTaxonomy = (terms: TaxonomyTermRaw[]): TaxonomyTerm[] =>
	terms.map(term => prepareTaxonomyTerm(term));

export const prepareTaxonomies = (
	{
		context_type,
		context_post_type,
		context_post_type_template
	}: Record<
		"context_type" | "context_post_type" | "context_post_type_template",
		number[]
	>,
	taxonomies: Taxonomies
): {
	context_type: string;
	context_post_type: string[];
	context_post_type_template: string[];
} => ({
	// Get the taxonomy slug from the given taxonomy id
	context_type: context_type.length
		? getTermSlug(taxonomies.context_type, context_type[0])
		: "",
	context_post_type: context_post_type.length
		? getTermSlugs(taxonomies.context_post_type, context_post_type)
		: [],
	context_post_type_template: context_post_type_template.length
		? getTermSlugs(
				taxonomies.context_post_type_template,
				context_post_type_template
		  )
		: []
});
