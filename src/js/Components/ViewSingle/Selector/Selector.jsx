import l, { Div, pr, pr_store, generateClassName } from "../../../utils";
import TextSelector from "./TextSelector";
import BlockSelector from "./BlockSelector";

const { withDispatch } = wp.data;
const { compose } = wp.compose;

const Selector = props => {
	const { selector_type } = props;

	return (
		<Div
			className={generateClassName([
				`${pr}-selector`,
				`${pr}-selector-type-${selector_type}`
			])}
		>
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
