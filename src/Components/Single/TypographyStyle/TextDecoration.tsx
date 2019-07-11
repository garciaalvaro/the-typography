import { __ } from "@wordpress/i18n";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import { Div, ControlTextToggle } from "utils/Components";
import { addPrefix } from "utils/tools";
import { useSetProp } from "hooks";

interface TextDecorationOption {
	value: TextDecoration;
	label: string;
}

interface Props {
	custom_text_decoration: Typography["custom_text_decoration"];
	text_decoration: Typography["text_decoration"];
	group_id?: SelectorGroup["id"];
}

const options: TextDecorationOption[] = [
	{ value: "none", label: "none" },
	{ value: "line-through", label: "line-through" },
	{ value: "overline", label: "overline" },
	{ value: "underline", label: "underline" }
];

export const TextDecoration: React.ComponentType<Props> = props => {
	const { custom_text_decoration, text_decoration, group_id } = props;
	const setValue = useSetProp(group_id);

	return (
		<Div className={["control-container", "control-container-text_decoration"]}>
			<ControlTextToggle
				group_id={group_id}
				prop_key="custom_text_decoration"
				prop_value={custom_text_decoration}
				label={__("text-decoration")}
			>
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
					value={text_decoration}
					onChange={e => setValue("text_decoration", e.target.value)}
				>
					{options.map(({ value, label }) => (
						<MenuItem key={value} value={value}>
							{label}
						</MenuItem>
					))}
				</Select>
			</ControlTextToggle>
		</Div>
	);
};
