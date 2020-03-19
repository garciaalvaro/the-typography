import { render, Fragment } from "@wordpress/element";
import { useSelect } from "@wordpress/data";

import { App } from "Components/App/App";
import { UpdateWP } from "Components/UpdateWP/UpdateWP";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).wp.customize.bind("ready", () => {
	render(
		<Fragment>{useSelect !== undefined ? <App /> : <UpdateWP />}</Fragment>,
		document.getElementById("customize-control-control_thet")
	);
});
