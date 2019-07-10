import l from "utils";
import Root from "Components/Root/Root";

wp.customize.bind("ready", () =>
	wp.element.render(
		<Root />,
		document.getElementById("customize-control-control_thet")
	)
);
