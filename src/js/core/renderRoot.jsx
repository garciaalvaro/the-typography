import l from "utils";
import Root from "../Components/Root/Root";

const App = () => <Root />;

const renderRoot = () =>
	wp.customize.bind("ready", () =>
		wp.element.render(
			<App />,
			document.getElementById("customize-control-control_thet")
		)
	);

export default renderRoot;
