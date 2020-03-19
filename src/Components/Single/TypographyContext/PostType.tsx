import { __ } from "@wordpress/i18n";
import { useEffect, useState } from "@wordpress/element";
import { useDispatch, useSelect } from "@wordpress/data";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import { Span } from "utils/Components";
import { store_slug } from "utils/data";
import { addPrefix, prepareTaxonomyTerm } from "utils/tools";
import { useSetProp } from "hooks";

type Props = {
	_context_fixed: Typography["_context_fixed"];
	context_post_type: Typography["context_post_type"];
};

export const PostType: React.ComponentType<Props> = props => {
	const { context_post_type, _context_fixed } = props;

	const { addTaxonomyTerm } = useDispatch(store_slug);

	const setValue = useSetProp();

	const { saveEntityRecord } = useDispatch("core");

	const taxonomies = useSelect<State["taxonomies"]>(select =>
		select(store_slug).getTaxonomies()
	);

	const post_types_raw = useSelect<PostTypeRaw[] | undefined>(select =>
		select("core").getPostTypes()
	);

	const [post_types_local, setPostTypesLocal] = useState<PostType[]>([]);

	useEffect(() => {
		const post_types = post_types_raw
			? post_types_raw
					.filter(
						({ slug, viewable }) =>
							viewable && slug !== "attachment"
					)
					.map(({ slug, name }) => ({
						value: slug,
						label: name
					}))
			: [];

		// In case there are post types which no longer exist,
		// we create a new array with both.
		setPostTypesLocal([
			...post_types,
			...context_post_type
				.filter(
					post_type =>
						!post_types.find(({ value }) => value === post_type)
				)
				.map(post_type => ({ value: post_type, label: post_type }))
		]);
	}, [post_types_raw]);

	if (_context_fixed) {
		return (
			<Span>
				{context_post_type
					.map(
						post_type =>
							post_types_local.find(
								({ value }) => value === post_type
							) || post_type
					)
					.join(", ")}
			</Span>
		);
	}

	return (
		<Select
			classes={{
				root: addPrefix("material_ui-select-root"),
				select: addPrefix("material_ui-select-select")
			}}
			className={addPrefix("material_ui-select-container")}
			MenuProps={{
				classes: {
					paper: addPrefix("material_ui-select-menu")
				}
			}}
			multiple
			displayEmpty
			value={context_post_type}
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			onChange={async (e: any) => {
				const values_new: string[] = e.target.value;

				setValue("context_post_type", values_new);

				values_new.map(async value_new => {
					// If the term exists already, return. Otherwise save the taxonomy term.
					if (
						taxonomies.context_post_type.find(
							({ slug }) => slug === value_new
						)
					) {
						return;
					}

					const post_type = post_types_local.find(
						({ value }) => value === value_new
					);

					if (!post_type) {
						return;
					}

					const term_raw = (await saveEntityRecord(
						"taxonomy",
						"context_post_type",
						{
							slug: value_new,
							name: post_type.label
						}
					)) as TaxonomyTermRaw;
					const term = prepareTaxonomyTerm(term_raw);

					addTaxonomyTerm({
						taxonomy_name: "context_post_type",
						term
					});
				});
			}}
			renderValue={selected_raw => {
				const selected = selected_raw as typeof context_post_type;

				if (!selected.length) {
					return (
						<Span className="material_ui-select-placeholder">
							{__("Select types")}
						</Span>
					);
				}

				return selected
					.reduce((labels: string[], value) => {
						const post_type = post_types_local.find(
							post_type => post_type.value === value
						);

						if (!post_type) {
							return labels;
						}

						return [...labels, post_type.label];
					}, [])
					.join(", ");
			}}
		>
			{post_types_local.map(({ value, label }) => (
				<MenuItem key={value} value={value}>
					{label}
				</MenuItem>
			))}
		</Select>
	);
};
