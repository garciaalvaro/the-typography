import { __ } from "@wordpress/i18n";
import { useEffect, useState } from "@wordpress/element";
import { useSelect } from "@wordpress/data";

import { Div, Span } from "utils/Components";
import { store_slug } from "utils/data";
import { getTermNames } from "utils/tools";

interface Props {
	context_type: Typography["context_type"];
	context_post_type: Typography["context_post_type"];
}

export const Context: React.ComponentType<Props> = props => {
	const { context_type, context_post_type } = props;
	const taxonomies = useSelect<State["taxonomies"]>(select =>
		select(store_slug).getTaxonomies()
	);
	const [context_label, setContextLabel] = useState("");

	useEffect(() => {
		if (context_type === "all_site") {
			setContextLabel(__("All site"));
		} else if (context_type === "front_page") {
			setContextLabel(__("Front page"));
		} else if (context_type === "404_page") {
			setContextLabel(__("404 page"));
		} else if (context_type === "post_type" && taxonomies.context_post_type) {
			const title = __("Post type: ");
			const post_types = getTermNames(
				taxonomies.context_post_type,
				context_post_type
			).join(", ");

			setContextLabel(title + post_types);
		}
	}, [context_type, context_post_type]);

	return (
		<Div className="typography-context">
			<Span>{context_label}</Span>
		</Div>
	);
};
