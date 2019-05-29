import l, { withControlCustom, addPrefix } from "utils";
import Slider from "@material-ui/lab/Slider";

const { __ } = wp.i18n;

const FontSize = props => {
	const { custom_font_size, font_size, updateProp } = props;

	if (!custom_font_size) {
		return null;
	}

	return (
		<Slider
			classes={{
				thumb: addPrefix("material_ui-range-thumb"),
				container: addPrefix("material_ui-range-container"),
				track: addPrefix("material_ui-range-track"),
				root: addPrefix("material_ui-range-root"),
				activated: addPrefix("material_ui-range-activated"),
				focused: addPrefix("material_ui-range-focused"),
				jumped: addPrefix("material_ui-range-jumped")
			}}
			min={5}
			max={70}
			step={1}
			value={font_size}
			onChange={(e, value) => updateProp("font_size", value)}
		/>
	);
};

export default withControlCustom({
	setting_name: "font_size",
	label: __("font-size")
})(FontSize);
