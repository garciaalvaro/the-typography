import l, { withControlCustom, pr, toFixed } from "../../../utils";
import Slider from "@material-ui/lab/Slider";

const { __ } = wp.i18n;

const LetterSpacing = props => {
	const { custom_letter_spacing, letter_spacing, updateProp } = props;

	if (!custom_letter_spacing) {
		return null;
	}

	return (
		<Slider
			classes={{
				thumb: `${pr}-material_ui-range-thumb`,
				container: `${pr}-material_ui-range-container`,
				track: `${pr}-material_ui-range-track`,
				root: `${pr}-material_ui-range-root`
			}}
			step={0.1}
			min={0}
			max={10}
			value={letter_spacing}
			onChange={(e, value) => updateProp("letter_spacing", toFixed(value, 1))}
		/>
	);
};

export default withControlCustom({
	setting_name: "letter_spacing",
	label: __("letter-spacing")
})(LetterSpacing);
