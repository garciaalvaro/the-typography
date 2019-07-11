import { __ } from "@wordpress/i18n";
import TextField from "@material-ui/core/TextField";

import { addPrefix } from "utils/tools";
import { ControlTextToggle } from "utils/Components";
import { useSetProp } from "hooks";

export const EditParentSelector: React.ComponentType<SelectorGroup> = props => {
	const { custom_parent_selector, parent_selector, id } = props;
	const setValue = useSetProp(id);

	return (
		<ControlTextToggle
			prop_key="custom_parent_selector"
			prop_value={custom_parent_selector}
			group_id={id}
			label={__("Use a parent selector")}
		>
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
				onChange={e => setValue("parent_selector", e.target.value)}
			/>
		</ControlTextToggle>
	);
};
