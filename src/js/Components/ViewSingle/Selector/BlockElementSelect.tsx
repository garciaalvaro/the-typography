import l, { Div, addPrefix } from "utils";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";

const { __ } = wp.i18n;
const { Component } = wp.element;

class BlockElementSelect extends Component {
	componentDidMount() {
		const { block, block_element_label, updateProp } = this.props;

		if (
			block &&
			block_element_label !== "Custom selector" &&
			!block.elements.find(({ label }) => label === block_element_label)
		) {
			updateProp("block_element_label", "Custom selector");
		}
	}

	render() {
		const {
			block,
			block_element_label,
			block_selector_extra,
			updateProp
		} = this.props;
		const selected = block.elements.find(
			({ label }) => label === block_element_label
		);

		if (!selected) {
			return null;
		}

		return (
			<Div classes="block_selector-element">
				<Select
					value={selected.value}
					onChange={e => {
						const value = e.target.value;
						const element = block.elements.find(el => el.value === value);
						const extra =
							value === "block_root" || value === "custom_selector"
								? ""
								: element.selector;

						updateProp("block_element_label", element.label);
						updateProp("block_selector_extra", extra);
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
					renderValue={selected =>
						block.elements.find(({ value }) => value === selected).label
					}
				>
					{block.elements.map(({ value, label }) => (
						<MenuItem key={value} value={value}>
							{label}
						</MenuItem>
					))}
				</Select>
				{block_element_label === "Custom selector" && (
					<TextField
						InputLabelProps={{
							classes: {
								root: addPrefix("material_ui-textfield-label"),
								focused: addPrefix("material_ui-textfield-label-focused")
							}
						}}
						InputProps={{
							classes: {
								root: addPrefix("material_ui-textfield-input"),
								focused: addPrefix("material_ui-textfield-input-focused")
							}
						}}
						placeholder={__("enter a CSS selector")}
						value={block_selector_extra}
						onChange={e => {
							const extra = e.target.value;

							updateProp("block_selector_extra", extra);
						}}
					/>
				)}
			</Div>
		);
	}
}

export default BlockElementSelect;
