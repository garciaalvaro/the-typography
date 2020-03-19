import { __ } from "@wordpress/i18n";
import { useState, useEffect } from "@wordpress/element";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";

import { Div } from "utils/Components";
import { addPrefix } from "utils/tools";
import { useSetProp } from "hooks";

type Props = Selector & {
	block_type: BlockType;
	group_id: SelectorGroup["id"];
};

// TODO: handle not-found options
const getOptionFromSelector = (
	selector: Selector["block_selector_extra"],
	options: BlockTypeDataElement[]
) => {
	const option = options.find(option => option.selector === selector);

	if (option && option.id !== "custom") {
		return option;
	}

	if (selector) {
		return options.find(
			option => option.id === "custom"
		) as BlockTypeDataElement;
	}

	return options.find(option => option.id === "root") as BlockTypeDataElement;
};

const getOptionFromId = (id: string, options: BlockTypeDataElement[]) => {
	const option = options.find(option => option.id === id);

	if (option) {
		return option;
	}

	return options.find(
		option => option.id === "custom"
	) as BlockTypeDataElement;
};

const getOptions = (options: BlockTypeDataElement[]) =>
	options.map(({ id, name, selector }) => ({
		value: id,
		label: name,
		selector
	}));

export const BlockExtraSelect: React.ComponentType<Props> = props => {
	const { block_type, block_selector_extra, group_id, id } = props;
	const setValue = useSetProp(group_id, id);
	const [options, setOptions] = useState(getOptions(block_type.elements));
	const [selected, setSelected] = useState(
		getOptionFromSelector(block_selector_extra, block_type.elements)
	);
	// The carret jumps on update when the input is being read from the store.
	// So we set a local state.
	const [value_local, setValueLocal] = useState(block_selector_extra);

	useEffect(() => {
		setOptions(getOptions(block_type.elements));
		setSelected(
			getOptionFromSelector(block_selector_extra, block_type.elements)
		);
	}, [block_type.value]);

	return (
		<Div className="block_selector_extra">
			<Select
				value={selected.id}
				onChange={e => {
					const id = e.target.value as BlockTypeDataElement["id"];

					// If the option didnt change, return
					if (selected.id === id) {
						return;
					}

					const option = getOptionFromId(id, block_type.elements);

					setSelected(option);

					if (option.id === "custom" || option.id === "root") {
						setValue("block_selector_extra", "");
					} else {
						setValue("block_selector_extra", option.selector);
					}
				}}
				classes={{
					root: addPrefix("material_ui-select-root"),
					select: addPrefix("material_ui-select-select")
				}}
				className={addPrefix("material_ui-select-container")}
				MenuProps={{
					classes: {
						paper: addPrefix("material_ui-select-menu")
					}
				}}
				renderValue={selected => {
					const id = selected as BlockTypeDataElement["id"];
					const option = getOptionFromId(id, block_type.elements);

					return option.name;
				}}
			>
				{options.map(({ value, label }) => (
					<MenuItem key={value} value={value}>
						{label}
					</MenuItem>
				))}
			</Select>

			{selected.id === "custom" && (
				<TextField
					InputLabelProps={{
						classes: {
							root: addPrefix("material_ui-textfield-label"),
							focused: addPrefix(
								"material_ui-textfield-label-focused"
							)
						}
					}}
					InputProps={{
						classes: {
							root: addPrefix("material_ui-textfield-input"),
							focused: addPrefix(
								"material_ui-textfield-input-focused"
							)
						}
					}}
					className={addPrefix("material_ui-select-container")}
					placeholder={__("enter a CSS selector")}
					value={value_local}
					onChange={e => {
						setValue("block_selector_extra", e.target.value);
						setValueLocal(e.target.value);
					}}
				/>
			)}
		</Div>
	);
};
