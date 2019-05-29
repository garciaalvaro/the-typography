import l, { pr_store, Span, Div, pr, addPrefix } from "utils";
import ReactSelect from "react-select";

interface withSelect {
	blocks: State["blocks"];
}
interface Parent extends Selector {
	block: BlockType | undefined;
	updateProp: FunctionVoid;
}
type Props = withSelect & Parent;

const { __ } = wp.i18n;
const { BlockIcon } = wp.editor;
const { withSelect } = wp.data;

const Option: React.ComponentType<any> = props => {
	const { data, innerProps, isDisabled } = props;
	const { icon, label } = data;

	return isDisabled ? null : (
		<Div {...innerProps} classes={["react_select-menu-item", "selector-block"]}>
			<Div classes="selector-block-icon">
				<BlockIcon icon={icon} />
			</Div>
			<Span>{label}</Span>
		</Div>
	);
};

const SingleValue: React.ComponentType<any> = props => {
	const { data, innerProps } = props;
	const { value, label, icon } = data;

	if (value === "") {
		return (
			<Div {...innerProps} classes="selector-block">
				<Span>{__("...select a block")}</Span>
			</Div>
		);
	}

	return (
		<Div {...innerProps} classes="selector-block">
			<Div classes="selector-block-icon">
				{icon ? <BlockIcon icon={icon} /> : <Div classes="block_no_icon" />}
			</Div>
			<Span>{label}</Span>
		</Div>
	);
};

const BlockSelect: React.ComponentType<Props> = props => {
	const { block_name, block_title, block, blocks, updateProp } = props;
	const selected = block
		? {
				value: block.name,
				label: block.title,
				icon: block.icon
		  }
		: {
				value: block_name,
				label: block_title,
				icon: null
		  };

	return (
		<ReactSelect
			className={addPrefix("control-react_select")}
			classNamePrefix={pr}
			value={selected}
			onChange={({ value: name, label: title }: any) => {
				updateProp("block_name", name);
				updateProp("block_title", title);

				const selected = blocks.find(block => block.name === name);
				const root_selector =
					selected &&
					selected.elements.find(({ value }) => value === "block_root");

				updateProp("block_selector_extra", "");
				updateProp("block_element_label", "Block root");

				if (root_selector) {
					updateProp("block_selector_root", root_selector.selector);
				}
			}}
			options={blocks.map(({ name, title, icon }) => ({
				value: name,
				label: title,
				icon
			}))}
			placeholder={__("Select a block")}
			components={{ Option, SingleValue }}
		/>
	);
};

export default withSelect<withSelect, Parent>(select => {
	const { getBlocks } = select<SelectorsR["getBlocks"]>(pr_store);

	return {
		blocks: getBlocks()
	};
})(BlockSelect);
