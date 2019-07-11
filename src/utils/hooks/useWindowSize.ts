import { throttle } from "lodash";
import { useState, useEffect } from "@wordpress/element";

// https://stackoverflow.com/a/28241682 | CC BY-SA 3.0
export const useWindowSize = (time = 300) => {
	const [width, setWidth] = useState(
		window.innerWidth ||
			document.documentElement.clientWidth ||
			document.body.clientWidth
	);
	const [height, setHeight] = useState(
		window.innerHeight ||
			document.documentElement.clientHeight ||
			document.body.clientHeight
	);
	const throttled = throttle(
		() => {
			setWidth(
				window.innerWidth ||
					document.documentElement.clientWidth ||
					document.body.clientWidth
			);
			setHeight(
				window.innerHeight ||
					document.documentElement.clientHeight ||
					document.body.clientHeight
			);
		},
		time,
		{
			leading: true,
			trailing: true
		}
	);

	useEffect(() => {
		window.addEventListener("resize", throttled);

		return () => window.removeEventListener("resize", throttled);
	}, []);

	return { window_width: width, window_height: height };
};
