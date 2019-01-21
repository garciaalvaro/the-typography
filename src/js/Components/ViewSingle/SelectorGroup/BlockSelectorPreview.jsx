import l, { Div, Span, pr } from "../../../utils";

const { isUndefined } = lodash;
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { withSelect } = wp.data;
const { BlockIcon } = wp.editor;

const BlockSelectorPreview = props => {
	const {
		block_name,
		block_title,
		block_icon,
		block_selector_extra,
		block_element_label
	} = props;

	if (block_name === "") {
		return __("...select a block");
	}

	return (
		<Div className={`${pr}-selector-block`}>
			<Div className={`${pr}-selector-block-icon`}>
				{block_icon === null ? (
					<Div className={`${pr}-block_no_icon`} />
				) : (
					<BlockIcon icon={block_icon} />
				)}
			</Div>
			<Span>{block_title}</Span>
			{block_selector_extra !== "" && (
				<Fragment>
					<Span className={`${pr}-selector-block-separator`}>{__("|")}</Span>
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

export default withSelect((select, { block_name }) => {
	const { getBlockType } = select("core/blocks");
	const block_type = getBlockType(block_name);
	const block_icon = isUndefined(block_type) ? null : block_type.icon.src;

	return { block_icon };
})(BlockSelectorPreview);
