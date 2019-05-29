import l, { Div } from "utils";
import IndexView from "./IndexView";
import SingleView from "./SingleView";

interface Parent {
	view: State["view"];
}
type Props = Parent;

const Navigation: React.ComponentType<Props> = props => {
	const { view } = props;

	return (
		<Div id="navigation" classes={`view-${view}`}>
			{view === "index" ? <IndexView /> : <SingleView />}
		</Div>
	);
};

export default Navigation;
