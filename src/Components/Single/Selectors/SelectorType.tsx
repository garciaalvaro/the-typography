import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import { Div } from "utils/Components";
import { addPrefix } from "utils/tools";
import { useSetProp } from "hooks";

type SelectorType = "text" | "block";

interface SelectorTypeOption {
	value: SelectorType;
	label: string;
}

interface Props extends Selector {
	group_id: SelectorGroup["id"];
	type: SelectorType;
	setType: Function;
}

const options: SelectorTypeOption[] = [
	{ value: "block", label: "Block selector" },
	{ value: "text", label: "Text selector" }
];

export const SelectorType: React.ComponentType<Props> = props => {
	const { group_id, id: selector_id, type, setType } = props;
	const setValue = useSetProp(group_id, selector_id);

	return (
		<Div className="selector_type">
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
				value={type}
				onChange={e => {
					setType(e.target.value as SelectorType);

					if (e.target.value === "text") {
						setValue("block_name", "");
						setValue("block_title", "");
						setValue("block_selector_root", "");
						setValue("block_selector_extra", "");
					} else {
						setValue("text_selector", "");
					}
				}}
			>
				{options.map(({ value, label }) => (
					<MenuItem key={value} value={value}>
						{label}
					</MenuItem>
				))}
			</Select>
		</Div>
	);
};
