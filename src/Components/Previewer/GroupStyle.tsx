import { remove, reduce, kebabCase } from "lodash";
import { useEffect } from "@wordpress/element";
import { useSelect } from "@wordpress/data";
import produce from "immer";

import { store_slug } from "utils/data";
import { useGroupStyle, useGroupSelectorsString } from "hooks";

type StyleProps = {
	typography_id: Typography["id"];
	group_id: SelectorGroup["id"];
	setStyles: Function;
};

type Styles = {
	group_id: SelectorGroup["id"];
	style: string;
	selector: string;
};

// We use a component to make use of an individual state for each style
export const GroupStyle: React.ComponentType<StyleProps> = props => {
	const { group_id, typography_id, setStyles } = props;

	const force_styles = useSelect<SelectorGroup["force_styles"]>(select =>
		select(store_slug).getForceStyles({ group_id, typography_id })
	);

	const style = useGroupStyle(group_id, typography_id);

	const selector = useGroupSelectorsString(group_id, typography_id);

	// On Unmount remove this style from styles.
	useEffect(() => {
		return () => {
			setStyles((styles: Styles[]) =>
				produce(styles, draft => {
					remove(draft, style => style.group_id === group_id);
				})
			);
		};
	}, []);

	// If the selector changes, update styles
	useEffect(() => {
		if (!selector) {
			return;
		}

		setStyles((styles: Styles[]) =>
			produce(styles, draft => {
				const style = draft.find(style => style.group_id === group_id);

				if (style) {
					style.selector = selector;
				} else {
					draft.push({
						group_id,
						style: "",
						selector: selector
					});
				}
			})
		);
	}, [selector]);

	// If the style or force_styles changes, update styles
	useEffect(() => {
		if (!style) {
			return;
		}

		setStyles((styles: Styles[]) =>
			produce(styles, draft => {
				const style_obj = draft.find(
					style_obj => style_obj.group_id === group_id
				);

				const style_string = reduce(
					style,
					(acc, prop_value, prop_key) =>
						`${acc}${kebabCase(prop_key)}:${prop_value}${
							force_styles ? "!important" : ""
						};`,
					""
				);

				if (style_obj) {
					style_obj.style = style_string;
				} else {
					draft.push({
						group_id,
						style: style_string,
						selector: ""
					});
				}
			})
		);
	}, [style, force_styles]);

	return null;
};
