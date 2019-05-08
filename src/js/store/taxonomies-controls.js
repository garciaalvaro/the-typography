import l from "utils";

const controls = {
	FETCH_TAXONOMIES(action) {
		return wp.apiFetch({
			path: `/wp/v2/${action.taxonomy}`
		});
	}
};

export default controls;
