import { render, Fragment } from "@wordpress/element";
import { useSelect } from "@wordpress/data";

import { App } from "Components/App/App";
import { UpdateWP } from "Components/UpdateWP/UpdateWP";

(window as any).wp.customize.bind("ready", () => {
	render(
		<Fragment>{useSelect ? <App /> : <UpdateWP />}</Fragment>,
		document.getElementById("customize-control-control_thet")
	);
});
