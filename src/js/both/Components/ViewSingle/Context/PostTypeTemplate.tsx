import l, { Span, addPrefix } from "src/js/both/utils";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

interface Props {
	_context_fixed: Typography["_context_fixed"];
	context_post_type_template: Typography["context_post_type_template"];
	updateProp: FunctionVoid;
}

const { compact, get } = lodash;
const { __ } = wp.i18n;

const templates = [
	{ slug: "index", name: __("Index") },
	{ slug: "single", name: __("Single") }
];

const PostTypeTemplate: React.ComponentType<Props> = props => {
	const { context_post_type_template, updateProp, _context_fixed } = props;

	if (_context_fixed) {
		return (
			<Span>
				{context_post_type_template
					.map(template =>
						get(templates.find(({ slug }) => slug === template), "name")
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
			value={context_post_type_template}
			onChange={e => updateProp("context_post_type_template", e.target.value)}
			// @ts-ignore
			renderValue={(selected: typeof context_post_type_template) => {
				if (!selected.length) {
					return (
						<Span classes={"material_ui-select-placeholder"}>
							{__("Select templates")}
						</Span>
					);
				}

				selected = selected
					.filter(temp => templates.find(({ slug }) => temp === slug))
					.map(temp => {
						const type = templates.find(({ slug }) => temp === slug);

						return type ? type.name : "";
					});
				selected = compact(selected);

				return selected.join(", ");
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
