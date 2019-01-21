import typographies from "./typographies-selectors";
import gfonts from "./gfonts-selectors";
import navigation from "./navigation-selectors";
import single from "./single-selectors";
import taxonomies from "./taxonomies-selectors";

export default {
	...typographies,
	...gfonts,
	...navigation,
	...single,
	...taxonomies
};
