import { __ } from "@wordpress/i18n";
import { Fragment, useState, useEffect, useContext } from "@wordpress/element";

import { Span, Icon } from "utils/Components";
import { is_editor } from "utils/data";
import { BlockSelect } from "./BlockSelect";
import { ContextBlockTypes } from "../Typography/Typography";
import { BlockExtraSelect } from "./BlockExtraSelect";

interface Props extends Selector {
	group_id: SelectorGroup["id"];
}

export const SelectorBlock: React.ComponentType<Props> = props => {
	const { block_types } = useContext(ContextBlockTypes);
	const { block_name, block_title } = props;
	const [block_type, setBlockType] = useState<BlockType | undefined>(undefined);

	useEffect(() => {
		if (!block_types.length) {
			return;
		}

		const block_type = block_types.find(({ value }) => value === block_name);

		if (block_type) {
			setBlockType(block_type);
		} else if (block_name) {
			setBlockType({
				value: "",
				label: block_title,
				icon: <Icon icon="error" />,
				elements: [
					{
						id: "root",
						name: __("Block root"),
						selector:
							".wp-block-" +
							block_name.replace(/^core\//, "").replace(/\//, "-")
					},
					{
						id: "custom",
						name: __("Custom selector"),
						selector: ""
					}
				]
			});
		}
	}, [block_types.length]);

	return (
		<Fragment>
			{is_editor && !block_type && block_name && (
				<Span className="single-message">
					{__("The Block could not be found.")}
				</Span>
			)}

			<BlockSelect
				{...props}
				block_type={block_type}
				setBlockType={setBlockType}
			/>

			{block_type && <BlockExtraSelect {...props} block_type={block_type} />}
		</Fragment>
	);
};
