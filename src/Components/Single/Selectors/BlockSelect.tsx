import { __ } from "@wordpress/i18n";
import { useContext } from "@wordpress/element";
import ReactSelect from "react-select";
import { ValueType } from "react-select/src/types";

import { BlockOption } from "utils/Components";
import { plugin_prefix } from "utils/data";
import { addPrefix } from "utils/tools";
import { useSetProp } from "hooks";
import { ContextBlockTypes } from "../Typography/Typography";

interface BlockSelectProps extends Selector {
	group_id: SelectorGroup["id"];
	block_type: BlockType | undefined;
	setBlockType: Function;
}

const Option: React.ComponentType<Object> = props => {
	const { data, innerProps, isDisabled } = props;
	const { icon, label } = data;

	return isDisabled ? null : (
		<BlockOption icon={icon} label={label} extra_props={innerProps} />
	);
};

const SingleValue: React.ComponentType<Object> = props => {
	const { data, innerProps } = props;
	const { value, label, icon } = data;

	if (!value) {
		<BlockOption label={__("...select a block")} extra_props={innerProps} />;
	}

	return <BlockOption icon={icon} label={label} extra_props={innerProps} />;
};

export const BlockSelect: React.ComponentType<BlockSelectProps> = props => {
	const { block_types } = useContext(ContextBlockTypes);
	const { block_type, group_id, id, setBlockType } = props;
	const setValue = useSetProp(group_id, id);

	return (
		<ReactSelect
			className={addPrefix("control-react_select")}
			classNamePrefix={plugin_prefix}
			value={block_type}
			onChange={(selected: ValueType<BlockType>) => {
				setBlockType(selected);

				if (!selected) {
					return;
				}

				const { value, label, elements } = selected as BlockType;

				setValue("block_name", value);
				setValue("block_title", label);

				// Reset to default values
				setValue("block_selector_extra", "");

				const block_root = elements.find(
					({ name }) => name === __("Block root")
				);

				if (block_root) {
					setValue("block_selector_root", block_root.selector);
				} else {
					setValue("block_selector_root", "");
				}
			}}
			options={block_types}
			placeholder={__("Select a block")}
			// @ts-ignore TODO
			components={{ Option, SingleValue }}
		/>
	);
};
