import domReady from "@wordpress/dom-ready";
import { registerCoreBlocks } from "@wordpress/block-library";
import { select } from "@wordpress/data";

// Register core blocks inside the Customizer so we can
// select them from the block selector menu.
domReady(() => {
	if (select("core/blocks").getBlockType("core/paragraph")) {
		return;
	}

	registerCoreBlocks();
});
