import { compact } from "lodash";
import { useEffect, useState } from "@wordpress/element";
import { useSelect } from "@wordpress/data";

import { store_slug } from "utils/data/plugin";

export const useGroupSelectorsString = (
	group_id: SelectorGroup["id"],
	typography_id?: Typography["id"]
) => {
	const selectors = useSelect<Selector[]>(select =>
		select(store_slug).getSelectors({ typography_id, group_id })
	);
	const parent_selector = useSelect<SelectorGroup["parent_selector"]>(select =>
		select(store_slug).getParentSelector({
			typography_id,
			group_id
		})
	);
	const [selectors_string, setSelectorsString] = useState("");

	useEffect(() => {
		if (!selectors.length) {
			return;
		}

		setSelectorsString(
			compact(selectors)
				.map(selector =>
					parent_selector ? `${parent_selector} ${selector}` : `${selector}`
				)
				.join(",")
		);
	}, [parent_selector, selectors.join("")]);

	return selectors_string;
};
