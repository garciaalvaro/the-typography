import { camelCase, values } from "lodash";
import { useEffect, useState } from "@wordpress/element";
import { useSelect } from "@wordpress/data";

import { store_slug } from "utils/data/plugin";

interface useSelectTypographyStyle {
	typography_style: TypographyStyle | null;
}

interface useSelectGroupStyle {
	group_style: SelectorGroupStyle | null;
}

interface StylePropName {
	custom_prop: keyof StyleCustomProps | "custom_font";
	prop: keyof StyleNonCustomProps | "font_family";
}

interface StyleJustPropsCamelCase {
	fontSize?: Style["font_size"];
	lineHeight?: Style["line_height"];
	letterSpacing?: Style["letter_spacing"];
	color?: Style["color"];
	fontWeight?: Style["font_weight"];
	fontStyle?: Style["font_style"];
	textTransform?: Style["text_transform"];
	textDecoration?: Style["text_decoration"];
}

const props_name: StylePropName[] = [
	{ custom_prop: "custom_font", prop: "font_family" },
	{ custom_prop: "custom_color", prop: "color" },
	{ custom_prop: "custom_font_weight", prop: "font_weight" },
	{ custom_prop: "custom_font_style", prop: "font_style" },
	{ custom_prop: "custom_text_transform", prop: "text_transform" },
	{ custom_prop: "custom_text_decoration", prop: "text_decoration" },
	{ custom_prop: "custom_font_size", prop: "font_size" },
	{ custom_prop: "custom_line_height", prop: "line_height" },
	{ custom_prop: "custom_letter_spacing", prop: "letter_spacing" }
];

export const useTypographyStyle = (typography_id?: Typography["id"]) => {
	const { typography_style } = useSelect<useSelectTypographyStyle>(select => ({
		typography_style: select(store_slug).getStyleProps({ typography_id })
	}));

	const style = useStyle(typography_style);

	return style;
};

export const useGroupStyle = (
	group_id: SelectorGroup["id"],
	typography_id?: Typography["id"]
) => {
	const { typography_style } = useSelect<useSelectTypographyStyle>(select => ({
		typography_style: select(store_slug).getStyleProps({ typography_id })
	}));
	const { group_style } = useSelect<useSelectGroupStyle>(select => ({
		group_style: select(store_slug).getStyleProps({
			typography_id,
			group_id
		})
	}));
	const style = useStyle(typography_style, group_style);

	return style;
};

const useStyle = (
	typography_style: TypographyStyle | null,
	group_style?: SelectorGroupStyle | null
) => {
	const [style, setStyle] = useState<StyleJustPropsCamelCase>({});

	useEffect(() => {
		if (!typography_style) {
			return;
		}

		setStyle(
			props_name.reduce<StyleJustPropsCamelCase>(
				(style, { custom_prop, prop }) => {
					let value = null;

					if (custom_prop === "custom_font" || prop === "font_family") {
						if (typography_style.custom_font && typography_style.font_family) {
							const family = typography_style.font_family.replace(/_/g, " ");

							return {
								...style,
								fontFamily: `'${family}'`
							};
						}
						return style;
					}

					if (
						group_style &&
						group_style.custom_typography &&
						group_style[custom_prop]
					) {
						value = group_style[prop];
					} else if (typography_style[custom_prop]) {
						value = typography_style[prop];
					}

					if (value === null) {
						return style;
					}

					if (prop === "font_size" || prop === "letter_spacing") {
						value = `${value}px`;
					}

					return {
						...style,
						[camelCase(prop)]: value
					};
				},
				{}
			)
		);
	}, [
		...(typography_style ? values(typography_style) : []),
		...(group_style ? values(group_style) : [])
	]);

	return style;
};
