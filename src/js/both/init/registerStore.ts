import l, { pr_store } from "utils";
import reducer from "store/_reducer";
import actions from "store/_actions";
import controls from "store/_controls";
import selectors from "store/_selectors";
import resolvers from "store/_resolvers";

wp.data.registerStore(pr_store, {
	// @ts-ignore
	reducer,
	// @ts-ignore
	actions,
	controls,
	// @ts-ignore
	selectors,
	resolvers
});
