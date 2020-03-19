import { useSelect } from "@wordpress/data";
import { applyFilters } from "@wordpress/hooks";

import "./Typographies.styl";
import { Div } from "utils/Components";
import { store_slug, is_pro } from "utils/data";
import { MessageLoading } from "./MessageLoading";
import { MessageNoResults } from "./MessageNoResults";
import { Typography } from "../Typography/Typography";
import { ButtonLoadMore } from "./ButtonLoadMore";

const Tabs = applyFilters<React.ComponentType>(
	"the_typography.Component.Tabs",
	() => null
);

const DownloadedFonts = applyFilters<React.ComponentType>(
	"the_typography.Component.DownloadedFonts",
	() => null
);

export const Typographies: React.ComponentType = () => {
	const tab_open = useSelect<State["tab_open"]>(select =>
		select(store_slug).getTabOpen()
	);

	const is_loading = useSelect<State["is_loading"]>(select =>
		select(store_slug).isLoading()
	);

	const reached_last_page = useSelect<State["reached_last_page"]>(select =>
		select(store_slug).reachedLastPage()
	);

	const typographies = useSelect<State["typographies"]>(select =>
		select(store_slug).getTypographies()
	);

	const show_tabs = is_pro;

	const show_load_more_button =
		!is_loading && !reached_last_page && !!typographies.length;

	const show_message_loading = is_loading;

	const show_message_no_results =
		!is_loading &&
		tab_open === "typographies" &&
		reached_last_page &&
		!typographies.length;

	return (
		<Div id="content-index" className="content">
			{show_tabs && <Tabs />}

			{tab_open === "typographies" ? (
				typographies.map(typography => (
					<Typography key={typography.id} {...typography} />
				))
			) : (
				<DownloadedFonts />
			)}

			{show_load_more_button && <ButtonLoadMore />}

			{show_message_loading && <MessageLoading />}

			{show_message_no_results && <MessageNoResults />}
		</Div>
	);
};
