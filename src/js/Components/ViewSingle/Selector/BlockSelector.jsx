import l, { pr_store, is_editor, Span } from "utils";
import SelectorType from "./SelectorType";
import ButtonRemove from "./ButtonRemove";
import BlockSelect from "./BlockSelect";
import BlockElementSelect from "./BlockElementSelect";

const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { withSelect } = wp.data;

const BlockSelector = props => {
	const { id, parent_id, block, block_name, selector_type, updateProp } = props;

	return (
		<Fragment>
			<ButtonRemove id={id} parent_id={parent_id} />
			<SelectorType selector_type={selector_type} updateProp={updateProp} />
			{is_editor && !block && block_name !== "" && (
				<Span classes="message">{__("The Block could not be found.")}</Span>
			)}
			<BlockSelect {...props} />
			{block && <BlockElementSelect {...props} />}
		</Fragment>
	);
};

export default withSelect((select, { block_name }) => {
	const { getBlock } = select(pr_store);

	return {
		block: getBlock(block_name)
	};
})(BlockSelector);
