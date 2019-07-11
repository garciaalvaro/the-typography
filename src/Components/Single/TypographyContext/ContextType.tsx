import { __ } from "@wordpress/i18n";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import { addPrefix } from "utils/tools";
import { Span } from "utils/Components";
import { useSetProp } from "hooks";

interface Props {
	_context_fixed: Typography["_context_fixed"];
	context_type: Typography["context_type"];
}

const options: { value: ContextType; label: string }[] = [
	{ value: "all_site", label: __("All site") },
	{ value: "post_type", label: __("Post type/s") },
	{ value: "front_page", label: __("Front page") },
	{ value: "404_page", label: __("404 page") }
];

export const ContextType: React.ComponentType<Props> = props => {
	const { context_type, _context_fixed } = props;
	const setValue = useSetProp();

	if (_context_fixed) {
		const context_type_option = options.find(
			({ value }) => value === context_type
		);

		return (
			<Span>
				{context_type_option ? context_type_option.label : context_type}
			</Span>
		);
	}

	return (
		<Select
			displayEmpty
			value={context_type}
			onChange={e => {
				setValue("context_type", e.target.value);
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
						<Span className="material_ui-select-placeholder">
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
