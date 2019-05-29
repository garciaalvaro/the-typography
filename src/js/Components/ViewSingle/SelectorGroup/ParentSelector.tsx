import l, { Span, addPrefix } from "utils";
import TextField from "@material-ui/core/TextField";

interface Parent extends SelectorGroup {
	updateProp: FunctionVoid;
}
type Props = Parent;

const { __ } = wp.i18n;
const { Fragment } = wp.element;

const ParentSelector: React.ComponentType<Props> = props => {
	const { custom_parent_selector, parent_selector, updateProp } = props;

	return (
		<Fragment>
			<Span
				classes={[
					"control-text_toggle",
					custom_parent_selector ? "enabled" : "disabled"
				]}
				onClick={() =>
					updateProp("custom_parent_selector", !custom_parent_selector)
				}
			>
				{__("Use a parent selector")}
			</Span>
			{custom_parent_selector && (
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
					value={parent_selector}
					onChange={e => updateProp("parent_selector", e.target.value)}
				/>
			)}
		</Fragment>
	);
};

export default ParentSelector;
