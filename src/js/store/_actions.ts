import typographies from "./typographies-actions";
import gfonts from "./gfonts-actions";
import navigation from "./navigation-actions";
import single from "./single-actions";
import entities from "./entities-actions";

export default {
	...typographies,
	...gfonts,
	...navigation,
	...single,
	...entities
};
