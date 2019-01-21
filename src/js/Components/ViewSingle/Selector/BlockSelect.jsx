import l, { Span, Div, pr, generateClassName } from "../../../utils";
import ReactSelect from "react-select";

const { __ } = wp.i18n;
const { BlockIcon } = wp.editor;

const Option = props => {
	const { data, innerProps, isDisabled } = props;

	return !isDisabled ? (
		<Div
			{...innerProps}
			className={generateClassName([
				`${pr}-react_select-menu-item`,
				`${pr}-selector-block`
			])}
		>
			<Div className={`${pr}-selector-block-icon`}>
				<BlockIcon icon={data.icon} />
			</Div>
			<Span>{data.label}</Span>
		</Div>
	) : null;
};

const SingleValue = props => {
	const { data, innerProps } = props;
	const { value, label, icon } = data;

	if (value === "") {
		return (
			<Div {...innerProps} className={`${pr}-selector-block`}>
				<Span>{__("...select a block")}</Span>
			</Div>
		);
	}

	return (
		<Div {...innerProps} className={`${pr}-selector-block`}>
			<Div className={`${pr}-selector-block-icon`}>
				{icon === null ? (
					<Div className={`${pr}-block_no_icon`} />
				) : (
					<BlockIcon icon={icon} />
				)}
			</Div>
			<Span>{label}</Span>
		</Div>
	);
};

const BlockSelect = props => {
	const {
		block_name,
		block_title,
		block_icon,
		blocks_from_store,
		updateProp
	} = props;
	const selected_block = {
		value: block_name,
		label: block_title,
		icon: block_icon
	};

	return (
		<ReactSelect
			className={`${pr}-control-react_select`}
			classNamePrefix={pr}
			value={selected_block}
			onChange={selected => {
				updateProp("block_name", selected.value);
			}}
			options={blocks_from_store}
			placeholder={__("Select a block")}
			components={{ Option, SingleValue }}
		/>
	);
};

export default BlockSelect;
