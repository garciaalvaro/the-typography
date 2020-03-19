import { useDispatch } from "@wordpress/data";

import { store_slug } from "utils/data";
import { Button, Icon } from "utils/Components";

export const ButtonAdd: React.ComponentType = () => {
	const { loadSingle } = useDispatch(store_slug);

	return (
		<Button
			id="button-add_typography"
			className={["navigation-button", "button-icon"]}
			onClick={() => loadSingle(0)}
		>
			<Icon icon="add" />
		</Button>
	);
};
