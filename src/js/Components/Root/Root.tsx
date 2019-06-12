import l, { is_customizer, Div, pr_store, withFixedHeight } from "utils";
import Previewer from "../Previewer/Previewer";
import GFonts from "../GFonts/GFonts";
import Navigation from "../Navigation/Navigation";
import ViewIndex from "../ViewIndex/ViewIndex";
import ViewSingle from "../ViewSingle/ViewSingle";
import ViewInsert from "../ViewInsert/ViewInsert";

interface withSelect {
	view: State["view"];
}
type Props = withSelect;

const { compose } = wp.compose;
const { withSelect } = wp.data;

const Root: React.ComponentType<Props> = props => {
	const { view } = props;

	return (
		<Div id="container">
			{is_customizer && <Previewer />}
			<GFonts />
			<Navigation view={view} />
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

export default compose([
	withFixedHeight,
	withSelect<withSelect>(select => {
		const { getView } = select<SelectorsR["getView"]>(pr_store);

		return { view: getView() };
	})
])(Root);
