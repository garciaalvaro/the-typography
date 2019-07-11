import { useSelect } from "@wordpress/data";

import { is_pro, store_slug } from "utils/data/plugin";

export const useIsPredefinedSingle = () => {
	const is_predefined = useSelect<boolean>(select =>
		select(store_slug).isPredefinedSingle()
	);

	return is_pro && is_predefined;
};
