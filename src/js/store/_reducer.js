import typographies from "./typographies-reducer";
import gfonts from "./gfonts-reducer";
import navigation from "./navigation-reducer";
import single from "./single-reducer";
import taxonomies from "./taxonomies-reducer";

export default wp.data.combineReducers({
	typographies,
	gfonts,
	navigation,
	single,
	taxonomies
});
