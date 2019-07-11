import { __ } from "@wordpress/i18n";

import { Div } from "utils/Components";

export const MessageLoading: React.ComponentType = props => {
	return (
		<Div id="message-loading" className="index-message">
			{__("Loading typographies...")}
		</Div>
	);
};
