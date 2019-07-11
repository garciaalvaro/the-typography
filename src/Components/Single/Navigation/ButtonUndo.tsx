import { __ } from "@wordpress/i18n";
import { useDispatch } from "@wordpress/data";

import { Button } from "utils/Components";
import { store_slug } from "utils/data";

export const ButtonUndo: React.ComponentType = props => {
	const { undoSingle } = useDispatch(store_slug);

	return (
		<Button
			id="button-undo_single"
			className={["button-text", "button-navigation"]}
			onClick={undoSingle}
		>
			{__("Undo")}
		</Button>
	);
};
