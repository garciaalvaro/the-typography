import l, { Div, pr } from "../../../utils";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const { __ } = wp.i18n;
const { Component } = wp.element;

const options = [
	{ value: "block", label: "Block selector" },
	{ value: "text", label: "Text selector" }
];

class SelectorType extends Component {
	render() {
		const { selector_type, updateProp } = this.props;

		return (
			<Div className={`${pr}-selector_type`}>
				<Select
					classes={{
						root: `${pr}-material_ui-select-root`,
						select: `${pr}-material_ui-select-select`
					}}
					className={`${pr}-material_ui-select-container`}
					MenuProps={{
						classes: {
							paper: `${pr}-material_ui-select-menu`
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
