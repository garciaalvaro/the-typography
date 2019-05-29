import l, { typographies_per_page } from "utils";

const controls = {
	FETCH_TYPOGRAPHIES(action) {
		return wp.apiFetch({
			path: `/wp/v2/the_typography?per_page=${typographies_per_page}`
		});
	}
};

export default controls;
