import l from "utils";
import registerCoreBlocks from "./core/registerCoreBlocks";
import createStore from "./store";
import renderRoot from "./core/renderRoot";

registerCoreBlocks();
createStore();
renderRoot();
