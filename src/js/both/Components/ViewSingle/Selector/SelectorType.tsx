import l, { Div, addPrefix } from "utils";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

interface Parent {
	updateProp: FunctionVoid;
	selector_type: Selector["selector_type"];
}
type Props = Parent;

const options = [
	{ value: "block", label: "Block selector" },
	{ value: "text", label: "Text selector" }
];

const SelectorType: React.ComponentType<Props> = props => {
	const { selector_type, updateProp } = props;

	return (
		<Div classes="selector_type">
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
				value={selector_type}
				onChange={e => updateProp("selector_type", e.target.value)}
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

export default SelectorType;
