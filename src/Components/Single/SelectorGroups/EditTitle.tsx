import { __ } from "@wordpress/i18n";
import TextField from "@material-ui/core/TextField";

import { ControlTextToggle } from "utils/Components";
import { addPrefix } from "utils/tools";
import { useSetProp } from "hooks";

export const EditTitle: React.ComponentType<SelectorGroup> = props => {
	const { custom_title, title, id } = props;
	const setValue = useSetProp(id);

	return (
		<ControlTextToggle
			prop_key="custom_title"
			prop_value={custom_title}
			group_id={id}
			label={__("Use a title for this group")}
		>
			<TextField
				InputLabelProps={{
					classes: {
						root: addPrefix("material_ui-textfield-label"),
						focused: addPrefix(
							"material_ui-textfield-label-focused"
						)
					}
				}}
				InputProps={{
					classes: {
						root: addPrefix("material_ui-textfield-input"),
						focused: addPrefix(
							"material_ui-textfield-input-focused"
						)
					}
				}}
				placeholder={__("enter a title")}
				value={title}
				onChange={e => setValue("title", e.target.value)}
			/>
		</ControlTextToggle>
	);
};
