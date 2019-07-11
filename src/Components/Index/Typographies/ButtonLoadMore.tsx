import { __ } from "@wordpress/i18n";

import { Button } from "utils/Components";
import { useFetchTypographies } from "hooks";

export const ButtonLoadMore: React.ComponentType = props => {
	const fetchTypographies = useFetchTypographies();

	return (
		<Button
			onClick={fetchTypographies}
			id="button-load_more"
			className="button-text"
		>
			{__("Load more")}
		</Button>
	);
};
