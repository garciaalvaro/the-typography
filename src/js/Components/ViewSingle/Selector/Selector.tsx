import l, { Div, pr_store } from "utils";
import TextSelector from "./TextSelector";
import BlockSelector from "./BlockSelector";

const { withDispatch } = wp.data;
const { compose } = wp.compose;

const Selector = props => {
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
	withDispatch((dispatch, { id, parent_id }) => {
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
