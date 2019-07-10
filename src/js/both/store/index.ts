import l, { pr_store } from "src/js/both/utils";
import reducer from "./_reducer";
import actions from "./_actions";
import controls from "./_controls";
import selectors from "./_selectors";
import resolvers from "./_resolvers";

const createStore = () =>
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

export default createStore;
