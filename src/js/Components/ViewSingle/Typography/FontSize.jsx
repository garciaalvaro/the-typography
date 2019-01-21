import l, { withControlCustom, pr } from "../../../utils";
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
				thumb: `${pr}-material_ui-range-thumb`,
				container: `${pr}-material_ui-range-container`,
				track: `${pr}-material_ui-range-track`,
				root: `${pr}-material_ui-range-root`,
				activated: `${pr}-material_ui-range-activated`,
				focused: `${pr}-material_ui-range-focused`,
				jumped: `${pr}-material_ui-range-jumped`
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
