import { useEffect, useRef, useState } from "@wordpress/element";

import { useIsFirstRender } from "utils/hooks/useIsFirstRender";

export const useNewElementJustAdded = (elements: any[], delay = 1000) => {
	const previous_elements_length = useRef(elements.length);
	const [new_added, setNewAdded] = useState(false);
	const is_first_render = useIsFirstRender();

	useEffect(() => {
		if (
			is_first_render ||
			elements.length <= previous_elements_length.current
		) {
			return;
		}

		previous_elements_length.current = elements.length;

		setNewAdded(true);

		const timer = setTimeout(() => {
			setNewAdded(false);
		}, delay);

		return () => {
			clearTimeout(timer);
		};
	}, [elements.length]);

	return new_added;
};
