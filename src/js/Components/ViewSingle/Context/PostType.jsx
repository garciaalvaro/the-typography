import l, { Span, addPrefix } from "utils";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const { isUndefined } = lodash;
const { __ } = wp.i18n;

const PostType = props => {
	const { context_post_type, updateProp } = props;
	const post_types = [
		...the_typography.post_types,
		...context_post_type
			.filter(type =>
				isUndefined(the_typography.post_types.find(({ slug }) => slug === type))
			)
			.map(type => ({ slug: type, name: type }))
	];

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
			onChange={e => updateProp("context_post_type", e.target.value)}
			renderValue={selected => {
				if (!selected.length) {
					return (
						<Span classes="material_ui-select-placeholder">
							{__("Select types")}
						</Span>
					);
				}

				return selected
					.map(
						selected => post_types.find(({ slug }) => selected === slug).name
					)
					.join(", ");
			}}
		>
			{post_types.map(({ slug, name }, index) => (
				<MenuItem key={index} value={slug}>
					{name}
				</MenuItem>
			))}
		</Select>
	);
};

export default PostType;
