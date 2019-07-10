import l, { withControlCustom, addPrefix, toFixed } from "src/js/both/utils";
import Slider from "@material-ui/lab/Slider";

interface Parent extends Typography {
	updateProp: FunctionVoid;
}
type Props = Parent;

const { __ } = wp.i18n;

const LineHeight: React.ComponentType<Props> = props => {
	const { custom_line_height, line_height, updateProp } = props;

	if (!custom_line_height) {
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
			min={0.3}
			max={3}
			value={line_height}
			onChange={(e, value) => updateProp("line_height", toFixed(value, 1))}
		/>
	);
};

export default withControlCustom({
	setting_name: "line_height",
	label: __("line-height")
})(LineHeight);
