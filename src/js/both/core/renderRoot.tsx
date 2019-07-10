import l from "src/js/both/utils";
import Root from "../Components/Root/Root";

const renderRoot = () =>
	wp.customize.bind("ready", () =>
		wp.element.render(
			<Root />,
			document.getElementById("customize-control-control_thet")
		)
	);

export default renderRoot;
