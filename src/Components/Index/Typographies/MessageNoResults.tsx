import { __ } from "@wordpress/i18n";
import { useDispatch } from "@wordpress/data";

import { Div, Span, Button } from "utils/Components";
import { store_slug } from "utils/data";

export const MessageNoResults: React.ComponentType = props => {
	const { loadSingle } = useDispatch(store_slug);

	return (
		<Div id="message-no_results" className="index-message">
			<Span>{__("No typographies found.")}</Span>
			<Button
				id="button-add_first_typography"
				className={["button-text", "button-with_border"]}
				onClick={() => loadSingle(0)}
			>
				{__("Add a Typography")}
			</Button>
		</Div>
	);
};
