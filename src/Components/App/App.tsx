import { noop } from "lodash";
import { Fragment } from "@wordpress/element";
import { useSelect } from "@wordpress/data";
import { applyFilters } from "@wordpress/hooks";

import "./App.styl";
import { Previewer } from "../Previewer/Previewer";
import { AppContainer } from "./AppContainer";
import { is_customizer, store_slug } from "utils/data";
import {
	useHandleFonts,
	useFetchTypographies,
	useFetchTaxonomies
} from "hooks";
import { Navigation as NavigationIndex } from "../Index/Navigation/Navigation";
import { Navigation as NavigationSingle } from "../Single/Navigation/Navigation";
import { Typographies } from "../Index/Typographies/Typographies";
import { Typography } from "../Single/Typography/Typography";

const useFetchDownloadedFonts = applyFilters(
	"the_typography.hook.useFetchDownloadedFonts",
	() => noop
);

export const App: React.ComponentType = () => {
	const view = useSelect<State["view"]>(select =>
		select(store_slug).getView()
	);

	useHandleFonts();
	useFetchDownloadedFonts();
	useFetchTaxonomies();
	useFetchTypographies();

	return (
		<AppContainer>
			{is_customizer && <Previewer />}

			{view === "index" ? (
				<Fragment>
					<NavigationIndex />
					<Typographies />
				</Fragment>
			) : (
				<Fragment>
					<NavigationSingle />
					<Typography />
				</Fragment>
			)}
		</AppContainer>
	);
};
