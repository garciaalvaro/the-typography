import tinycolor from "tinycolor2";
import { useEffect, useState } from "@wordpress/element";
import { useSelect } from "@wordpress/data";

import { store_slug } from "utils/data/plugin";

type ColorProps = {
	custom_color: Style["custom_color"];
	color: Style["color"];
};

export const useColorScheme = (typography_id?: Typography["id"]) => {
	const typography_color_props = useSelect<ColorProps | null>(select =>
		select(store_slug).getColorProps({ typography_id })
	);

	const [scheme, setScheme] = useState("");

	useEffect(() => {
		let custom_color = false;
		let color = "";

		if (
			typography_color_props &&
			typography_color_props.custom_color &&
			typography_color_props.color
		) {
			custom_color = typography_color_props.custom_color;
			color = typography_color_props.color;
		}

		if (!custom_color || !color) {
			setScheme("");
			return;
		}

		if (
			tinycolor.isReadable("#fff", color, {
				level: "AA",
				size: "large"
			})
		) {
			setScheme("light");
		} else {
			setScheme("dark");
		}
	}, [
		// TODO: Confirm it is valid to use conditional dependencies
		...(typography_color_props
			? [
					typography_color_props.custom_color,
					typography_color_props.color
			  ]
			: [])
	]);

	return scheme;
};

export const useGroupColorScheme = (group_id: SelectorGroup["id"]) => {
	const typography_color_props = useSelect<ColorProps>(select =>
		select(store_slug).getColorProps()
	);

	const group_color_props = useSelect<ColorProps | null>(select =>
		select(store_slug).getColorProps({ group_id })
	);

	const [scheme, setScheme] = useState("");

	useEffect(() => {
		let custom_color = false;
		let color = "";

		if (
			typography_color_props &&
			typography_color_props.custom_color &&
			typography_color_props.color
		) {
			custom_color = typography_color_props.custom_color;
			color = typography_color_props.color;
		}

		if (
			group_color_props &&
			group_color_props.custom_color &&
			group_color_props.color
		) {
			custom_color = group_color_props.custom_color;
			color = group_color_props.color;
		}

		if (!custom_color || !color) {
			setScheme("");
			return;
		}

		if (
			tinycolor.isReadable("#fff", color, {
				level: "AA",
				size: "large"
			})
		) {
			setScheme("light");
		} else {
			setScheme("dark");
		}
	}, [
		typography_color_props.custom_color,
		typography_color_props.color,
		// TODO: Confirm it is valid to use conditional dependencies
		...(group_color_props
			? [group_color_props.custom_color, group_color_props.color]
			: [])
	]);

	return scheme;
};
