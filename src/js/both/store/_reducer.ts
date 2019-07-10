import typographies from "./typographies-reducer";
import gfonts from "./gfonts-reducer";
import navigation from "./navigation-reducer";
import single from "./single-reducer";
import entities from "./entities-reducer";

export default wp.data.combineReducers({
	typographies,
	gfonts,
	navigation,
	single,
	entities
});
