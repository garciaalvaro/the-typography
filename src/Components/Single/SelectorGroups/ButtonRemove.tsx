import { __ } from "@wordpress/i18n";
import { useDispatch } from "@wordpress/data";

import { ButtonPopover } from "utils/Components";
import { store_slug } from "utils/data";

interface Props {
	id: SelectorGroup["id"];
}

export const ButtonRemove: React.ComponentType<Props> = props => {
	const { id } = props;
	const { removeSelectorGroup } = useDispatch(store_slug);

	return (
		<ButtonPopover
			icon="delete"
			label={__("Remove Group")}
			click={() => removeSelectorGroup(id)}
			className="button-remove_selector_group"
		/>
	);
};
