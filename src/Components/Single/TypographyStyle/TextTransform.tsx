import { __ } from "@wordpress/i18n";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import { Div, ControlTextToggle } from "utils/Components";
import { addPrefix } from "utils/tools";
import { useSetProp } from "hooks";

interface TextTransformOption {
	value: TextTransform;
	label: string;
}
interface Props {
	custom_text_transform: Typography["custom_text_transform"];
	text_transform: Typography["text_transform"];
	group_id?: SelectorGroup["id"];
}

const options: TextTransformOption[] = [
	{ value: "none", label: "none" },
	{ value: "capitalize", label: "capitalize" },
	{ value: "uppercase", label: "uppercase" },
	{ value: "lowercase", label: "lowercase" }
];

export const TextTransform: React.ComponentType<Props> = props => {
	const { custom_text_transform, text_transform, group_id } = props;
	const setValue = useSetProp(group_id);

	return (
		<Div className={["control-container", "control-container-text_transform"]}>
			<ControlTextToggle
				group_id={group_id}
				prop_key="custom_text_transform"
				prop_value={custom_text_transform}
				label={__("text-transform")}
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
					value={text_transform}
					onChange={e => setValue("text_transform", e.target.value)}
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
