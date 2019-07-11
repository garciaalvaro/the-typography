import { __ } from "@wordpress/i18n";
import { useDispatch, useSelect } from "@wordpress/data";

import { ButtonPopover } from "utils/Components";
import { store_slug } from "utils/data";

export const ButtonBack: React.ComponentType = props => {
	const has_changed_single = useSelect<State["has_changed_single"]>(select =>
		select(store_slug).hasChangedSingle()
	);
	const { setView, resetSingle } = useDispatch(store_slug);

	return (
		<ButtonPopover
			show_popover={has_changed_single}
			label={__("Discard changes and Go back")}
			click={() => {
				setView("index");
				resetSingle();
			}}
			icon="back"
			className={["button-navigation", "button-icon"]}
			id="button-go_back"
		/>
	);
};
