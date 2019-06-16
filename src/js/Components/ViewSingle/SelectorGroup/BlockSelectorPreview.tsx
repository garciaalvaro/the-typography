import l, { Div, Span, pr_store } from "utils";

interface withSelect {
	block: BlockType | undefined;
}
interface Parent extends Selector {
	parent_id: string;
}
type Props = withSelect & Parent;

const { startCase } = lodash;
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { withSelect } = wp.data;
const { BlockIcon } = wp.blockEditor;

const BlockSelectorPreview: React.ComponentType<Props> = props => {
	let {
		block,
		block_name,
		block_title,
		block_selector_extra,
		block_element_label
	} = props;
	let block_icon = null;

	if (block) {
		block_title = block.title;
		block_icon = block.icon;
	} else if (block_title === "" && block_name !== "") {
		block_title = startCase(block_name);
	}

	if (block && block_element_label === "") {
		block_element_label = "Block root";
	} else if (
		block_element_label !== "Custom selector" &&
		(!block ||
			!block.elements.find(({ label }) => label === block_element_label))
	) {
		block_element_label = "Custom selector";
	}

	if (block_name === "") {
		return <Div classes="selector-block">{__("...select a block")}</Div>;
	}

	return (
		<Div classes="selector-block">
			<Div classes="selector-block-icon">
				{block_icon === null ? (
					<Div classes="block_no_icon" />
				) : (
					<BlockIcon icon={block_icon} />
				)}
			</Div>
			<Span>{block_title}</Span>
			{block_selector_extra !== "" && (
				<Fragment>
					<Span classes="selector-block-separator">{__("|")}</Span>
					<Span>
						{block_element_label === "Custom selector"
							? block_selector_extra
							: block_element_label}
					</Span>
				</Fragment>
			)}
		</Div>
	);
};

export default withSelect<withSelect, Parent>((select, { block_name }) => {
	const { getBlock } = select<SelectorsR["getBlock"]>(pr_store);

	return { block: getBlock(block_name) };
})(BlockSelectorPreview);
