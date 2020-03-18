import { __ } from "@wordpress/i18n";

import { Div, Span } from "utils/Components";

export const MessageLoading: React.ComponentType = () => {
	return (
		<Div id="message-loading" className="index-message">
			<Span>{__("Loading typographies...")}</Span>
		</Div>
	);
};
