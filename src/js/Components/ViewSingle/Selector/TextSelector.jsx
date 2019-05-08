import l, { addPrefix } from "../../../utils";
import TextField from "@material-ui/core/TextField";
import SelectorType from "./SelectorType";
import ButtonRemove from "./ButtonRemove";

const { __ } = wp.i18n;
const { Fragment } = wp.element;

const TextSelector = props => {
	const { text_selector, updateProp, id, parent_id } = props;

	return (
		<Fragment>
			<ButtonRemove id={id} parent_id={parent_id} />
			<SelectorType {...props} />
			<TextField
				// autoFocus={selector_just_added}
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
				value={text_selector}
				onChange={e => updateProp("text_selector", e.target.value)}
			/>
		</Fragment>
	);
};

export default TextSelector;
