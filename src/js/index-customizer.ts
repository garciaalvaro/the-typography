import l from "src/js/both/utils";
import registerCoreBlocks from "./both/core/registerCoreBlocks";
import createStore from "./both/store";
import renderRoot from "./both/core/renderRoot";

registerCoreBlocks();
createStore();
renderRoot();
