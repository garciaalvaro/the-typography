import l, { Div } from "../../utils";
import IndexView from "./IndexView";
import SingleView from "./SingleView";

const Navigation = props => {
	const { view } = props;

	return (
		<Div id="navigation" classes={`view-${view}`}>
			{view === "index" ? <IndexView /> : <SingleView />}
		</Div>
	);
};

export default Navigation;
