import l, { Span, addPrefix } from "utils";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const { __ } = wp.i18n;

const templates = [
	{ slug: "index", name: __("Index") },
	{ slug: "single", name: __("Single") }
];

const PostTypeTemplate = props => {
	const { context_post_type_template, updateProp } = props;

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
			value={context_post_type_template}
			onChange={e => updateProp("context_post_type_template", e.target.value)}
			renderValue={selected => {
				if (!selected.length) {
					return (
						<Span classes={"material_ui-select-placeholder"}>
							{__("Select templates")}
						</Span>
					);
				}

				return selected
					.map(template => templates.find(({ slug }) => template === slug).name)
					.join(", ");
			}}
		>
			{templates.map(({ slug, name }, index) => (
				<MenuItem key={index} value={slug}>
					{name}
				</MenuItem>
			))}
		</Select>
	);
};

export default PostTypeTemplate;
