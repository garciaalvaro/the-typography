import l, { pr_store } from "utils";
import reducer from "./_reducer";
import actions from "./_actions";
import controls from "./_controls";
import selectors from "./_selectors";
import resolvers from "./_resolvers";

const createStore = () =>
	wp.data.registerStore(pr_store, {
		reducer,
		actions,
		controls,
		selectors,
		resolvers
	});

export default createStore;
