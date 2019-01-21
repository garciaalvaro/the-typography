import l, {
	cleanTaxonomy,
	cleanTypographies,
	typographies_per_page,
	pr_store
} from "../utils";
import actions from "./_actions";

const resolvers = {
	*getTypographies() {
		yield actions.updateLoading(true);

		// Taxonomies
		let context_type;
		context_type = yield actions.fetchTaxonomies("context_type");
		context_type = cleanTaxonomy(context_type);

		let context_post_type;
		context_post_type = yield actions.fetchTaxonomies("context_post_type");
		context_post_type = cleanTaxonomy(context_post_type);

		let context_post_type_template;
		context_post_type_template = yield actions.fetchTaxonomies(
			"context_post_type_template"
		);
		context_post_type_template = cleanTaxonomy(context_post_type_template);

		const taxonomies = {
			context_type,
			context_post_type,
			context_post_type_template
		};

		yield actions.loadTaxonomies(taxonomies);

		// Typographies
		let typographies;
		typographies = yield actions.fetchTypographies();
		typographies = cleanTypographies(typographies, taxonomies);

		yield actions.loadTypographies(typographies);

		const previewer_data = wp.data.select(pr_store).getPreviewerData();

		yield actions.updateTypographiesVisibility(previewer_data);

		if (typographies.length < typographies_per_page) {
			yield actions.updateLastPage();
		}

		return yield actions.updateLoading(false);
	}
};

export default resolvers;
