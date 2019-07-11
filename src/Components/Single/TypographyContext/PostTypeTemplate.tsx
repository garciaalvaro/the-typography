import { __ } from "@wordpress/i18n";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import { addPrefix } from "utils/tools";
import { Span } from "utils/Components";
import { useSetProp } from "hooks";

interface Props
	extends Pick<Typography, "_context_fixed" | "context_post_type_template"> {}

const options = [
	{ value: "index", label: __("Index") },
	{ value: "single", label: __("Single") }
];

export const PostTypeTemplate: React.ComponentType<Props> = props => {
	const { _context_fixed, context_post_type_template } = props;
	const setValue = useSetProp();

	if (_context_fixed) {
		return (
			<Span>
				{context_post_type_template
					.reduce((labels: string[], value) => {
						const option = options.find(option => option.value === value);

						if (!option) {
							return labels;
						}

						return [...labels, option.label];
					}, [])
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
			onChange={e => setValue("context_post_type_template", e.target.value)}
			renderValue={selected_raw => {
				const selected = selected_raw as typeof context_post_type_template;

				if (!selected.length) {
					return (
						<Span className="material_ui-select-placeholder">
							{__("Select types")}
						</Span>
					);
				}

				return selected
					.reduce((labels: string[], value) => {
						const option = options.find(option => option.value === value);

						if (!option) {
							return labels;
						}

						return [...labels, option.label];
					}, [])
					.join(", ");
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
