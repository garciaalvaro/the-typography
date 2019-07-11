export const getTermId = (
	terms: TaxonomyTerm[],
	slug: string,
	default_value = 0
) => {
	const term = terms.find(term => term.slug === slug);

	if (!term) {
		return default_value;
	}

	return term.id;
};

export const getTermsId = (
	terms: TaxonomyTerm[],
	slugs: string[],
	default_value = 0
) => slugs.map(slug => getTermId(terms, slug, default_value));

export const getTermSlug = (
	terms: TaxonomyTerm[],
	id: number,
	default_value = ""
) => {
	const term = terms.find(term => term.id === id);

	if (!term) {
		return default_value;
	}

	return term.slug;
};

export const getTermSlugs = (
	terms: TaxonomyTerm[],
	ids: number[],
	default_value = ""
) => ids.map(id => getTermSlug(terms, id, default_value));

export const getTermName = (
	terms: TaxonomyTerm[],
	slug: string,
	default_value = ""
) => {
	const term = terms.find(term => term.slug === slug);

	if (!term) {
		return default_value;
	}

	return term.name;
};

export const getTermNames = (
	terms: TaxonomyTerm[],
	slugs: string[],
	default_value = ""
) => slugs.map(slug => getTermName(terms, slug, default_value));
