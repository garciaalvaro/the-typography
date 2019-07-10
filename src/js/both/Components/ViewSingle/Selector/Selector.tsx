import l, { Div, pr_store } from "src/js/both/utils";
import TextSelector from "./TextSelector";
import BlockSelector from "./BlockSelector";

interface withDispatch {
	updateProp: FunctionVoid;
	removeSelector: FunctionVoid;
}
interface Parent extends Selector {
	is_new: boolean;
	parent_id: string;
}
type Props = withDispatch & Parent;

const { withDispatch } = wp.data;
const { compose } = wp.compose;

const Selector: React.ComponentType<Props> = props => {
	const { selector_type, is_new } = props;
	const classes = [
		"selector",
		`selector-type-${selector_type}`,
		is_new ? "selector-new" : null
	];

	return (
		<Div classes={classes}>
			{selector_type === "text" ? (
				<TextSelector {...props} />
			) : (
				<BlockSelector {...props} />
			)}
		</Div>
	);
};

export default compose([
	withDispatch<withDispatch, Parent>((dispatch, { id, parent_id }) => {
		const { removeSelector, updateChanged, updateSelectorProp } = dispatch(
			pr_store
		);

		return {
			updateProp: (prop, value) => {
				updateSelectorProp(prop, value, id, parent_id);
				updateChanged(true);
			},
			removeSelector: () => {
				removeSelector(id, parent_id);
				updateChanged(true);
			}
		};
	})
])(Selector);
