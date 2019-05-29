const { pick, isUndefined } = lodash;

const cleanTaxonomyTerm = term => {
	const valid = ["id", "slug", "name"];
	return pick(term, valid);
};

const cleanTaxonomy = terms => {
	return terms.map(term => cleanTaxonomyTerm(term));
};

const getId = (terms, slug, default_value = "") => {
	const term = terms.find(term => slug == term.slug);

	if (isUndefined(term)) {
		return default_value;
	}

	return term.id;
};
const getIds = (terms, slugs, default_value = "") => {
	return slugs.map(slug => getId(terms, slug, default_value));
};

const getSlug = (terms, id, default_value = "") => {
	const term = terms.find(term => id == term.id);

	if (isUndefined(term)) {
		return default_value;
	}

	return term.slug;
};
const getSlugs = (terms, ids, default_value = "") => {
	return ids.map(id => getSlug(terms, id, default_value));
};

const getName = (terms, slug, default_value = "") => {
	const term = terms.find(term => slug == term.slug);

	if (isUndefined(term)) {
		return default_value;
	}

	return term.name;
};
const getNames = (terms, slugs, default_value = "") => {
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
