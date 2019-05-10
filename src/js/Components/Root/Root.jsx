import l, { is_customizer, Div, pr_store, withFixedHeight } from "utils";
import Blocks from "./Blocks";
import PreviewerStyles from "../Styles/Previewer";
import FontsStyles from "../Styles/Fonts";
import Navigation from "../Navigation/Navigation";
import ViewIndex from "../ViewIndex/ViewIndex";
import ViewSingle from "../ViewSingle/ViewSingle";

const { compose } = wp.compose;
const { withSelect } = wp.data;

const Root = props => {
	const { view } = props;

	return (
		<Div id="container">
			{is_customizer && <Blocks />}
			{is_customizer && <PreviewerStyles />}
			<FontsStyles />
			<Navigation view={view} />
			{view === "index" ? <ViewIndex /> : <ViewSingle />}
		</Div>
	);
};

export default compose([
	withFixedHeight,
	withSelect(select => {
		const { getView } = select(pr_store);

		return { view: getView() };
	})
])(Root);
