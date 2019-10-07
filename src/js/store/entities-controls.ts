import l from "utils";

const controls = {
	FETCH_TAXONOMIES(action: Object) {
		return wp.apiFetch({
			parse: true,
			path: `/wp/v2/${action.taxonomy_name}`
		});
	}
};

export default controls;
