import { __ } from "@wordpress/i18n";
import { useEffect, useState } from "@wordpress/element";

import { Span } from "utils/Components";

type Props = {
	update_counter: number;
	is_new: boolean;
};

export const MessageJustSaved: React.ComponentType<Props> = props => {
	const { update_counter, is_new } = props;
	const [message, setMessage] = useState<string | null>(null);

	useEffect(() => {
		if (update_counter === 0) {
			return;
		}

		setMessage(is_new ? __("Saved") : __("Updated"));

		const timer = setTimeout(() => setMessage(null), 2222);

		return () => {
			clearTimeout(timer);
			setMessage(null);
		};
	}, [update_counter]);

	if (!message) {
		return null;
	}

	return <Span id="navigation-updated_message">{message}</Span>;
};
