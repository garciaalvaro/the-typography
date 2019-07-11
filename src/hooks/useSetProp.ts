import { useState, useEffect } from "@wordpress/element";
import { useDispatch } from "@wordpress/data";

import { store_slug } from "utils/data/plugin";
import { useDebounce } from "utils/hooks/useDebounce";
import { useIsFirstRender } from "utils/hooks/useIsFirstRender";

export const useSetProp = (
	group_id?: SelectorGroup["id"],
	selector_id?: Selector["id"]
) => {
	const { setProp } = useDispatch(store_slug);

	const setValue = (
		prop_key: keyof Selector | keyof SelectorGroup | keyof Typography,
		prop_value: any
	) => {
		const payload = {
			prop_key,
			prop_value,
			group_id,
			selector_id
		};

		setProp(payload);
	};

	return setValue;
};

export const useSetPropDebounced = ({
	prop_key,
	initial_value,
	group_id,
	selector_id,
	delay
}: {
	prop_key: keyof Selector | keyof SelectorGroup | keyof Typography;
	initial_value: any;
	group_id?: SelectorGroup["id"];
	selector_id?: Selector["id"];
	delay?: number;
}) => {
	const is_first_render = useIsFirstRender();
	const [value, setValue] = useState(initial_value);
	const debounced_value = useDebounce(value, delay || 44);
	const { setProp } = useDispatch(store_slug);

	useEffect(() => {
		if (is_first_render) {
			return;
		}

		const payload = {
			prop_key,
			prop_value: debounced_value,
			group_id,
			selector_id
		};

		setProp(payload);
	}, [debounced_value]);

	return [value, setValue];
};
