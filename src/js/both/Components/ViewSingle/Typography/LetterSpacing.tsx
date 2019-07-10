import l, { withControlCustom, addPrefix, toFixed } from "src/js/both/utils";
import Slider from "@material-ui/lab/Slider";

interface Parent extends Typography {
	updateProp: FunctionVoid;
}
type Props = Parent;

const { __ } = wp.i18n;

const LetterSpacing: React.ComponentType<Props> = props => {
	const { custom_letter_spacing, letter_spacing, updateProp } = props;

	if (!custom_letter_spacing) {
		return null;
	}

	return (
		<Slider
			classes={{
				thumb: addPrefix("material_ui-range-thumb"),
				container: addPrefix("material_ui-range-container"),
				track: addPrefix("material_ui-range-track"),
				root: addPrefix("material_ui-range-root")
			}}
			step={0.1}
			min={-3}
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
