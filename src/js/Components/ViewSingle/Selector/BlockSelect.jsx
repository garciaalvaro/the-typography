import l, { Span, Div, pr, addPrefix } from "../../../utils";
import ReactSelect from "react-select";

const { __ } = wp.i18n;
const { BlockIcon } = wp.editor;

const Option = props => {
	const { data, innerProps, isDisabled } = props;

	return !isDisabled ? (
		<Div {...innerProps} classes={["react_select-menu-item", "selector-block"]}>
			<Div classes="selector-block-icon">
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
			<Div {...innerProps} classes="selector-block">
				<Span>{__("...select a block")}</Span>
			</Div>
		);
	}

	return (
		<Div {...innerProps} classes="selector-block">
			<Div classes="selector-block-icon">
				{icon === null ? (
					<Div classes="block_no_icon" />
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
			className={addPrefix("control-react_select")}
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
