import l, { addPrefix } from "src/js/both/utils";
import TextField from "@material-ui/core/TextField";
import SelectorType from "./SelectorType";
import ButtonRemove from "./ButtonRemove";

interface Parent extends Selector {
	updateProp: FunctionVoid;
	parent_id: string;
}
type Props = Parent;

const { __ } = wp.i18n;
const { Fragment } = wp.element;

const TextSelector: React.ComponentType<Props> = props => {
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
