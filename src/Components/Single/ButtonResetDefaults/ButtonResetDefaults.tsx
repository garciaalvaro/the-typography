import { __ } from "@wordpress/i18n";
import { useDispatch } from "@wordpress/data";

import "./ButtonResetDefaults.styl";
import { store_slug } from "utils/data";
import { ButtonPopover, Icon } from "utils/Components";

interface Props {
	group_id?: string;
}

export const ButtonResetDefaults: React.ComponentType<Props> = props => {
	const { group_id } = props;
	const { resetSingleStyle, resetSelectorGroupStyle } = useDispatch(store_slug);
	const resetStyle = () => {
		if (group_id) {
			resetSelectorGroupStyle(group_id);
		} else {
			resetSingleStyle();
		}
	};

	return (
		<ButtonPopover
			icon={<Icon icon="reset" />}
			label={__("Reset defaults")}
			click={resetStyle}
			className="button-reset_defaults"
		/>
	);
};
