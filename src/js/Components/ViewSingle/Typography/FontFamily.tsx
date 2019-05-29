import l, { addPrefix, pr, fonts_family, Div, icons } from "utils";
import Select from "react-select";

interface Parent extends Typography {
	addGFont: FunctionVoid;
	updateProp: FunctionVoid;
}
type Props = Parent & withToggle;

const { find } = lodash;
const { __ } = wp.i18n;
const { Icon } = wp.components;

const FontFamily: React.ComponentType<Props> = props => {
	const { id, updateProp, addGFont, font_family } = props;
	const selected = find(fonts_family, { value: font_family });

	return (
		<Div classes="setting-font_family">
			<Select
				className={addPrefix("control-react_select")}
				classNamePrefix={pr}
				value={selected}
				onChange={({ value }: any) => {
					updateProp("font_family", value);
					updateProp("font_variant", ["400"]);
					addGFont(id, value, ["400"]);
				}}
				options={fonts_family}
				placeholder={__("Select a family")}
			/>
			<Icon icon={icons.arrow_down} />
		</Div>
	);
};

export default FontFamily;
