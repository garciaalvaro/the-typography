import l, { Div, pr } from "../../../utils";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";

const { __ } = wp.i18n;

const BlockElementSelect = props => {
	const {
		block_elements,
		block_element,
		block_selector_extra,
		setState,
		updateProp
	} = props;

	return (
		<Div className={`${pr}-block_selector-element`}>
			<Select
				value={block_element}
				onChange={e => {
					const value = e.target.value;
					const element = block_elements.find(
						({ value: el_value }) => el_value === value
					);
					const element_selector =
						value === "block_root" || value === "custom_selector"
							? ""
							: element.selector;

					updateProp("block_element_label", element.label);
					updateProp("block_selector_extra", element_selector);

					setState({ block_element: value });
				}}
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
				renderValue={selected =>
					block_elements.find(({ value }) => value === selected).label
				}
			>
				{block_elements.map(({ value, label }) => (
					<MenuItem key={value} value={value}>
						{label}
					</MenuItem>
				))}
			</Select>
			{block_element === "custom_selector" && (
				<TextField
					InputLabelProps={{
						classes: {
							root: `${pr}-material_ui-textfield-label`,
							focused: `${pr}-material_ui-textfield-label-focused`
						}
					}}
					InputProps={{
						classes: {
							root: `${pr}-material_ui-textfield-input`,
							focused: `${pr}-material_ui-textfield-input-focused`
						}
					}}
					placeholder={__("enter a CSS selector")}
					value={block_selector_extra}
					onChange={e => {
						const value = e.target.value;

						updateProp("block_selector_extra", value);
					}}
				/>
			)}
		</Div>
	);
};

export default BlockElementSelect;
