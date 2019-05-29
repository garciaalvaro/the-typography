import l, { Span, addPrefix } from "utils";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

interface Props {
	context_type: Typography["context_type"];
	updateProp: FunctionVoid;
}

const { __ } = wp.i18n;

const options = [
	{ value: "all_site", label: __("All site") },
	{ value: "post_type", label: __("Post type/s") },
	{ value: "front_page", label: __("Front page") },
	{ value: "404_page", label: __("404 page") }
];

const ContextType: React.ComponentType<Props> = props => {
	const { context_type, updateProp } = props;

	return (
		<Select
			displayEmpty
			value={context_type}
			onChange={e => {
				updateProp("context_type", e.target.value);
			}}
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
			renderValue={selected => {
				if (selected === "") {
					return (
						<Span classes="material_ui-select-placeholder">
							{__("Select a context to filter")}
						</Span>
					);
				}

				const option = options.find(({ value }) => selected === value);

				return option ? option.label : "";
			}}
		>
			{options.map(({ value, label }) => (
				<MenuItem key={value} value={value}>
					{label}
				</MenuItem>
			))}
		</Select>
	);
};

export default ContextType;
