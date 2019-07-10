import l, {
	addPrefix,
	pr_store,
	cleanTypographyforDB,
	cleanTaxonomyTerm
} from "src/js/both/utils";

interface withDispatch {
	update: FunctionVoid;
}
interface Parent {
	button_state: "update" | "save";
	resetShowMessage: FunctionVoid;
	resetButtonState: FunctionVoid;
	setState: FunctionVoid;
}
type Props = withDispatch & Parent;

const { isUndefined, compact } = lodash;
const { __ } = wp.i18n;
const { Button } = wp.components;
const { withDispatch } = wp.data;

const ButtonUpdate: React.ComponentType<Props> = props => {
	const { update, button_state } = props;

	return (
		<Button
			id={addPrefix(
				button_state === "save"
					? "button-save_typography"
					: "button-update_typography"
			)}
			className={addPrefix("navigation-button")}
			onClick={update}
		>
			{button_state === "save" ? __("Save") : __("Update")}
		</Button>
	);
};

export default withDispatch<withDispatch, Parent>(
	(
		dispatch,
		{ resetShowMessage, resetButtonState, button_state, setState },
		{ select }
	) => {
		const { getSingle } = select<SelectorsR["getSingle"]>(pr_store);
		const { getTaxonomies } = select<SelectorsR["getTaxonomies"]>(pr_store);
		const {
			loadSingle,
			updateTypography,
			updateTaxonomyTerm,
			updateChanged,
			loadTypography
		} = dispatch(pr_store);
		const { saveEntityRecord } = dispatch("core");
		let taxonomies = getTaxonomies();
		const typography = getSingle();
		const update = async () => {
			updateChanged(false);

			setState({ show_message: true });
			resetShowMessage();

			if (button_state === "save") {
				resetButtonState();
			}

			if (!typography) {
				return;
			}

			// If there are post types (names) which have not been saved as a taxonomy yet.
			const non_existent_terms = compact(
				typography.context_post_type
					.filter(slug => {
						return isUndefined(
							taxonomies.context_post_type.find(
								({ slug: taxo_slug }: Object) => {
									return slug === taxo_slug;
								}
							)
						);
					})
					.map(slug => {
						const post_type = the_typography.post_types.find(
							({ slug: cpt_slug }: Object) => cpt_slug === slug
						);

						return {
							slug,
							name: post_type ? post_type.name : ""
						};
					})
			);

			if (non_existent_terms.length) {
				await Promise.all(
					non_existent_terms.map(async ({ slug, name }) => {
						const term_raw = (await saveEntityRecord(
							"taxonomy",
							"context_post_type",
							{
								slug,
								name
							}
						)) as (Object);
						const term = cleanTaxonomyTerm(term_raw);

						// Update the local variable so cleanTypographyforDB has the new term ids
						taxonomies = {
							...taxonomies,
							context_post_type: [...taxonomies.context_post_type, term]
						};

						return await updateTaxonomyTerm("context_post_type", term);
					})
				);
			}

			const typography_prepared = cleanTypographyforDB(typography, taxonomies);

			if (typography.id !== 0) {
				saveEntityRecord("postType", "the_typography", typography_prepared);

				loadSingle(typography);

				updateTypography(typography);
			} else {
				const new_typography: any = await saveEntityRecord(
					"postType",
					"the_typography",
					{
						...typography_prepared,
						status: "publish"
					}
				);

				loadSingle({ ...typography, id: new_typography.id });

				loadTypography({ ...typography, id: new_typography.id });
			}
		};

		return {
			update
		};
	}
)(ButtonUpdate);
