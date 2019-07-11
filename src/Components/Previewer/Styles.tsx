import { Fragment, useState, useEffect, useRef } from "@wordpress/element";
import { useSelect } from "@wordpress/data";

import { store_slug } from "utils/data";
import { GroupStyle } from "./GroupStyle";

interface Styles {
	group_id: SelectorGroup["id"];
	style: string;
	selector: string;
}

const { customize } = (window as any).wp;

export const Styles: React.ComponentType = props => {
	const ids = useSelect<
		{ typography_id: Typography["id"]; groups_id: SelectorGroup["id"][] }[]
	>(select => select(store_slug).getVisibleIds());
	const [styles, setStyles] = useState<Styles[]>([]);
	const style_string = useRef("");

	useEffect(() => {
		style_string.current = styles
			.filter(({ selector, style }) => selector && style)
			.map(({ selector, style }) => `${selector}{${style}}`)
			.join("");

		customize.previewer.send(
			"the_typography-style_string",
			style_string.current
		);
	}, [styles]);

	useEffect(() => {
		customize.previewer.bind("ready", () =>
			customize.previewer.send(
				"the_typography-style_string",
				style_string.current
			)
		);
	}, []);

	return (
		<Fragment>
			{ids.map(({ typography_id, groups_id }) =>
				groups_id.map(group_id => (
					<GroupStyle
						key={group_id}
						typography_id={typography_id}
						group_id={group_id}
						setStyles={setStyles}
					/>
				))
			)}
		</Fragment>
	);
};
