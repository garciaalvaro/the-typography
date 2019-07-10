import l, { typographies_per_page } from "src/js/both/utils";

const controls = {
	FETCH_TYPOGRAPHIES() {
		return wp.apiFetch({
			parse: true,
			path: `/wp/v2/the_typography?per_page=${typographies_per_page}`
		});
	}
};

export default controls;
