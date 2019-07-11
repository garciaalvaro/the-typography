import { useSelect } from "@wordpress/data";

import { is_pro, store_slug } from "utils/data/plugin";

export const useIsPredefined = (id: Typography["id"]) => {
	const is_predefined = useSelect<boolean>(select =>
		select(store_slug).isPredefined(id)
	);

	return is_pro && is_predefined;
};
