import { useState, useEffect } from "@wordpress/element";

import { useIsFirstRender } from "utils/hooks/useIsFirstRender";

// Modified from https://usehooks.com/useDebounce/ | MIT
export const useDebounce = (value: any, delay = 1111) => {
	const is_first_render = useIsFirstRender();
	const [debounced_value, setDebouncedValue] = useState(value);

	useEffect(() => {
		if (is_first_render) {
			return;
		}

		const timer = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			clearTimeout(timer);
		};
	}, [value, delay]);

	return debounced_value;
};
