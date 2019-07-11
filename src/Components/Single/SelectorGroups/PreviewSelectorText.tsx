import { __ } from "@wordpress/i18n";

import { Span } from "utils/Components";

export const PreviewSelectorText: React.ComponentType<Selector> = props => {
	const { text_selector } = props;

	return (
		<Span className="selector">
			{text_selector ? text_selector : __("...enter a selector")}
		</Span>
	);
};
