import { __ } from "@wordpress/i18n";
import { useDispatch } from "@wordpress/data";

import "./Title.styl";
import { Div, Span } from "utils/Components";
import { store_slug } from "utils/data";
import { useTypographyStyle } from "hooks";

interface Props {
	id: Typography["id"];
	title: Typography["title"];
}

export const Title: React.ComponentType<Props> = props => {
	const { id, title } = props;
	const { loadSingle } = useDispatch(store_slug);
	const style = useTypographyStyle(id);

	return (
		<Div
			className="typography-title"
			onClick={() => loadSingle(id)}
			style={style}
		>
			<Span>{title || __("...enter a Title")}</Span>
		</Div>
	);
};
