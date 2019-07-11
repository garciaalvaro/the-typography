import { render, Fragment } from "@wordpress/element";

import { App } from "Components/App/App";

(window as any).wp.customize.bind("ready", () =>
	render(
		<Fragment>
			<App />
		</Fragment>,
		document.getElementById("customize-control-control_thet")
	)
);
