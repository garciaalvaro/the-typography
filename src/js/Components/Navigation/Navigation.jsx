import l, { Div, pr, generateClassName } from "../../utils";
import IndexView from "./IndexView";
import SingleView from "./SingleView";

const Navigation = props => {
	const { view } = props;

	return (
		<Div id={`${pr}-navigation`} className={`${pr}-view-${view}`}>
			{view === "index" ? <IndexView /> : <SingleView />}
		</Div>
	);
};

export default Navigation;
