import { noop } from "lodash";
import { __ } from "@wordpress/i18n";
import { useDispatch } from "@wordpress/data";

import { Button } from "utils/Components";
import { store_slug } from "utils/data";

type Props = {
	new_element_just_added: boolean;
	group_id: SelectorGroup["id"];
};

export const ButtonAdd: React.ComponentType<Props> = props => {
	const { new_element_just_added, group_id } = props;
	const { addSelector } = useDispatch(store_slug);

	return (
		<Button
			onClick={
				!new_element_just_added ? () => addSelector(group_id) : noop
			}
			id="button-add_selector"
			className={["button-text", "button-with_border"]}
		>
			{__("Add selector")}
		</Button>
	);
};
