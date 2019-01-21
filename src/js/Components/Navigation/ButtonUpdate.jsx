import l, {
	pr,
	pr_store,
	cleanTypography,
	cleanTaxonomyTerm
} from "../../utils";

const { isUndefined } = lodash;
const { __ } = wp.i18n;
const { Button } = wp.components;
const { withDispatch } = wp.data;

const ButtonUpdate = props => {
	const { update, button_state } = props;

	return (
		<Button
			id={
				button_state === "save"
					? `${pr}-button-save_typography`
					: `${pr}-button-update_typography`
			}
			className={`${pr}-navigation-button`}
			onClick={update}
		>
			{button_state === "save" ? __("Save") : __("Update")}
		</Button>
	);
};

export default withDispatch(
	(
		dispatch,
		{ resetShowMessage, resetButtonState, button_state, setState },
		{ select }
	) => {
		const { getSingle, getTaxonomies } = select(pr_store);
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

			// If there are post types (names) which have not been saved as a taxonomy yet.
			const non_existent_terms = typography.context_post_type
				.filter(slug => {
					return isUndefined(
						taxonomies.context_post_type.find(({ slug: taxo_slug }) => {
							return slug === taxo_slug;
						})
					);
				})
				.map(slug => ({
					slug,
					name: the_typography.post_types.find(
						({ slug: cpt_slug }) => cpt_slug === slug
					).name
				}));

			if (non_existent_terms.length > 0) {
				await Promise.all(
					non_existent_terms.map(async ({ slug, name }) => {
						let term = await saveEntityRecord("taxonomy", "context_post_type", {
							slug,
							name
						});
						term = cleanTaxonomyTerm(term);

						// Update the local variable so cleanTypography has the new term ids
						taxonomies = {
							...taxonomies,
							context_post_type: [...taxonomies.context_post_type, term]
						};

						return await updateTaxonomyTerm("context_post_type", term);
					})
				);
			}

			const typography_prepared = cleanTypography(typography, taxonomies);

			if (typography.id !== 0) {
				saveEntityRecord("postType", "the_typography", typography_prepared);

				loadSingle(typography);

				updateTypography(typography);
			} else {
				const new_typography = await saveEntityRecord(
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
