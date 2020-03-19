import { __ } from "@wordpress/i18n";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import { Div, ControlTextToggle } from "utils/Components";
import { addPrefix } from "utils/tools";
import { useSetProp } from "hooks";

type FontStyleOption = {
	value: FontStyle;
	label: string;
};

type Props = {
	custom_font_style: Typography["custom_font_style"];
	font_style: Typography["font_style"];
	group_id?: SelectorGroup["id"];
};

const options: FontStyleOption[] = [
	{ value: "italic", label: "italic" },
	{ value: "normal", label: "normal" },
	{ value: "oblique", label: "oblique" }
];

export const FontStyle: React.ComponentType<Props> = props => {
	const { custom_font_style, font_style, group_id } = props;
	const setValue = useSetProp(group_id);

	return (
		<Div className={["control-container", "control-container-font_style"]}>
			<ControlTextToggle
				group_id={group_id}
				prop_key="custom_font_style"
				prop_value={custom_font_style}
				label={__("font-style")}
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
					value={font_style}
					onChange={e => setValue("font_style", e.target.value)}
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
