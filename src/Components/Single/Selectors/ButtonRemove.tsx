import { __ } from "@wordpress/i18n";
import { useDispatch } from "@wordpress/data";

import { ButtonPopover } from "utils/Components";
import { store_slug } from "utils/data";

type Props = {
	selector_id: Selector["id"];
	group_id: SelectorGroup["id"];
};

export const ButtonRemove: React.ComponentType<Props> = props => {
	const { selector_id, group_id } = props;
	const { removeSelector } = useDispatch(store_slug);

	return (
		<ButtonPopover
			icon="remove_circle"
			label={__("Remove Selector")}
			click={() => removeSelector({ group_id, selector_id })}
			className="button-remove_selector"
		/>
	);
};
