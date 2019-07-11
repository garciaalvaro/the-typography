import { noop } from "lodash";
import { __ } from "@wordpress/i18n";
import { useDispatch } from "@wordpress/data";

import { Button } from "utils/Components";
import { store_slug } from "utils/data";

interface Props {
	new_element_just_added: boolean;
}

export const ButtonAdd: React.ComponentType<Props> = props => {
	const { new_element_just_added } = props;
	const { addSelectorGroup } = useDispatch(store_slug);

	return (
		<Button
			onClick={!new_element_just_added ? addSelectorGroup : noop}
			id="button-add_selector_group"
			className={["button-text", "button-with_border"]}
		>
			{__("Add group of selectors")}
		</Button>
	);
};
