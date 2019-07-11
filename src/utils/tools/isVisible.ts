export const isVisible = (
	{ context_type, context_post_type, context_post_type_template }: Typography,
	{ is_front_page, is_404, post_type, template }: State["previewer_page_data"]
): boolean => {
	if (context_type === "all_site") {
		return true;
	}

	if (context_type === "front_page" && is_front_page) {
		return true;
	}

	if (context_type === "404_page" && is_404) {
		return true;
	}

	if (
		context_type === "post_type" &&
		post_type &&
		context_post_type.includes(post_type) &&
		context_post_type_template.includes(template)
	) {
		return true;
	}

	return false;
};
