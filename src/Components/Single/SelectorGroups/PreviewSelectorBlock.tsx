import { __ } from "@wordpress/i18n";
import { useContext, useState, useEffect } from "@wordpress/element";

import { Div, Span, BlockOption } from "utils/Components";
import { ContextBlockTypes } from "../Typography/Typography";

export const PreviewSelectorBlock: React.ComponentType<Selector> = props => {
	const { block_types } = useContext(ContextBlockTypes);

	const { block_name, block_title, block_selector_extra } = props;

	const [block_type, setBlockType] = useState<BlockType | undefined>(
		undefined
	);

	useEffect(() => {
		if (!block_types.length) {
			return;
		}

		const block_type = block_types.find(
			({ value }) => value === block_name
		);

		setBlockType(block_type);
	}, [block_types.length]);

	if (!block_name) {
		return (
			<Div className="selector">
				<Span>{__("...select a block")}</Span>
			</Div>
		);
	}

	if (!block_type) {
		return (
			<Div className="selector">
				<BlockOption label={block_title || block_name}>
					{block_selector_extra && (
						<Span>{block_selector_extra}</Span>
					)}
				</BlockOption>
			</Div>
		);
	}

	const element = block_type.elements.find(
		({ selector }) => selector === block_selector_extra
	);

	return (
		<Div className="selector">
			<BlockOption icon={block_type.icon} label={block_type.label}>
				{block_selector_extra && (
					<Span>{element ? element.name : block_selector_extra}</Span>
				)}
			</BlockOption>
		</Div>
	);
};
