import l, { Div } from "utils";
import ViewIndex from "./ViewIndex";
import ViewSingle from "./ViewSingle";
import ViewInsert from "./ViewInsert";

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
				<ViewInsert />
			)}
		</Div>
	);
};

export default Navigation;
