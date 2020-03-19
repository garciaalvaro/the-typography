import { __ } from "@wordpress/i18n";
import { useState } from "@wordpress/element";
import TextField from "@material-ui/core/TextField";

import { addPrefix } from "utils/tools";
import { useSetProp } from "hooks";

type Props = Selector & {
	is_new: boolean;
	group_id: SelectorGroup["id"];
};

export const SelectorText: React.ComponentType<Props> = props => {
	const { text_selector, is_new, group_id, id: selector_id } = props;
	const setValue = useSetProp(group_id, selector_id);
	// The carret jumps on update when the input is being read from the store.
	// So we set a local state.
	const [value_local, setValueLocal] = useState(text_selector);

	return (
		<TextField
			autoFocus={is_new}
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
			value={value_local}
			onChange={e => {
				setValue("text_selector", e.target.value);
				setValueLocal(e.target.value);
			}}
		/>
	);
};
