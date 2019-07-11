import { selectors_downloaded_fonts } from "./selectors-downloaded_fonts";
import { selectors_fonts } from "./selectors-fonts";
import { selectors_navigation } from "./selectors-navigation";
import { selectors_single } from "./selectors-single";
import { selectors_taxonomies } from "./selectors-taxonomies";
import { selectors_typographies } from "./selectors-typographies";

export const selectors = {
	...selectors_downloaded_fonts,
	...selectors_fonts,
	...selectors_navigation,
	...selectors_single,
	...selectors_taxonomies,
	...selectors_typographies
};
