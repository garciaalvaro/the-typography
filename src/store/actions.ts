import { actions_downloaded_fonts } from "./actions-downloaded_fonts";
import { actions_fonts } from "./actions-fonts";
import { actions_navigation } from "./actions-navigation";
import { actions_single } from "./actions-single";
import { actions_taxonomies } from "./actions-taxonomies";
import { actions_typographies } from "./actions-typographies";

export const actions = {
	...actions_downloaded_fonts,
	...actions_fonts,
	...actions_navigation,
	...actions_single,
	...actions_taxonomies,
	...actions_typographies
};
