import l, { Div } from "utils";
import ViewIndex from "./ViewIndex";
import ViewSingle from "./ViewSingle";
import ViewInfo from "./ViewInfo";

interface Parent {
	view: State["view"];
}
type Props = Parent;

const Navigation: React.ComponentType<Props> = props => {
	const { view } = props;

	return (
		<Div id="navigation" classes={`view-${view}`}>
			{view === "index" ? (
				<ViewIndex />
			) : view === "single" ? (
				<ViewSingle />
			) : (
				<ViewInfo />
			)}
		</Div>
	);
};

export default Navigation;
