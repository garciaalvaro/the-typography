import l, { pr, fonts_family, Div, icons } from "../../../utils";
import Select from "react-select";

const { find } = lodash;
const { __ } = wp.i18n;
const { Icon } = wp.components;

const FontFamily = props => {
	const { updateProp, updateGFont, font_family } = props;
	const selected = find(fonts_family, { value: font_family });

	return (
		<Div className={`${pr}-setting-font_family`}>
			<Select
				className={`${pr}-control-react_select`}
				classNamePrefix={pr}
				value={selected}
				onChange={({ value }) => {
					updateProp("font_family", value);
					updateProp("font_variant", ["400"]);
					updateGFont(value, ["400"]);
				}}
				options={fonts_family}
				placeholder={__("Select a family")}
			/>
			<Icon icon={icons.arrow_down} />
		</Div>
	);
};

export default FontFamily;
