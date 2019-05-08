import l, { Div, addPrefix } from "utils";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const { Component } = wp.element;

const options = [
	{ value: "block", label: "Block selector" },
	{ value: "text", label: "Text selector" }
];

class SelectorType extends Component {
	render() {
		const { selector_type, updateProp } = this.props;

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
	}
}

export default SelectorType;
