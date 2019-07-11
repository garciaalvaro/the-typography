import { __ } from "@wordpress/i18n";

import { ControlTextToggle } from "utils/Components";

export const EditForceStyles: React.ComponentType<SelectorGroup> = props => {
	const { force_styles, id } = props;

	return (
		<ControlTextToggle
			prop_key="force_styles"
			prop_value={force_styles}
			group_id={id}
			label={__("Force styles using !important")}
		/>
	);
};
