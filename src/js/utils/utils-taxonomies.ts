const { pick, isUndefined } = lodash;

const cleanTaxonomyTerm = (term: Object): TaxonomyTerm => {
	return pick(term, ["id", "slug", "name"]);
};

const cleanTaxonomy = (terms: Object[]): TaxonomyTerm[] => {
	return terms.map(term => cleanTaxonomyTerm(term));
};

const getId = (terms: Object[], slug: string, default_value = "") => {
	const term = terms.find(term => slug == term.slug);

	if (isUndefined(term)) {
		return default_value;
	}

	return term.id;
};
const getIds = (terms: Object[], slugs: string[], default_value = "") => {
	return slugs.map(slug => getId(terms, slug, default_value));
};

const getSlug = (terms: Object[], id: number, default_value = "") => {
	const term = terms.find(term => id == term.id);

	if (isUndefined(term)) {
		return default_value;
	}

	return term.slug;
};
const getSlugs = (terms: Object[], ids: number[], default_value = "") => {
	return ids.map(id => getSlug(terms, id, default_value));
};

const getName = (terms: Object[], slug: string, default_value = "") => {
	const term = terms.find(term => slug == term.slug);

	if (isUndefined(term)) {
		return default_value;
	}

	return term.name;
};
const getNames = (terms: Object[], slugs: string[], default_value = "") => {
	return slugs.map(slug => getName(terms, slug, default_value));
};

export {
	cleanTaxonomy,
	cleanTaxonomyTerm,
	getId,
	getIds,
	getSlug,
	getSlugs,
	getName,
	getNames
};
