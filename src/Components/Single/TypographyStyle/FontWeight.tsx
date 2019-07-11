import { __ } from "@wordpress/i18n";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import { Div, ControlTextToggle } from "utils/Components";
import { addPrefix } from "utils/tools";
import { useSetProp } from "hooks";

interface FontWeightOption {
	value: FontWeight;
	label: string;
}

interface Props {
	custom_font_weight: Typography["custom_font_weight"];
	font_weight: Typography["font_weight"];
	group_id?: SelectorGroup["id"];
}

const options: FontWeightOption[] = [
	{ value: "100", label: __("thin 100") },
	{ value: "200", label: __("extra-light 200") },
	{ value: "300", label: __("light 300") },
	{ value: "400", label: __("regular 400") },
	{ value: "500", label: __("medium 500") },
	{ value: "600", label: __("semi-bold 600") },
	{ value: "700", label: __("bold 700") },
	{ value: "800", label: __("extra-bold 800") },
	{ value: "900", label: __("black 900") }
];

export const FontWeight: React.ComponentType<Props> = props => {
	const { custom_font_weight, font_weight, group_id } = props;
	const setValue = useSetProp(group_id);

	return (
		<Div className={["control-container", "control-container-font_weight"]}>
			<ControlTextToggle
				group_id={group_id}
				prop_key="custom_font_weight"
				prop_value={custom_font_weight}
				label={__("font-weight")}
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
					value={font_weight}
					onChange={e => setValue("font_weight", e.target.value)}
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
