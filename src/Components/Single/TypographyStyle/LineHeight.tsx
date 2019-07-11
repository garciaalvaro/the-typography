import { __ } from "@wordpress/i18n";
import Slider from "@material-ui/lab/Slider";

import { Div, ControlTextToggle, RangeValueIndicator } from "utils/Components";
import { toFixed, addPrefix } from "utils/tools";
import { useSetPropDebounced } from "hooks";

interface Props {
	custom_line_height: Typography["custom_line_height"];
	line_height: Typography["line_height"];
	group_id?: SelectorGroup["id"];
}

export const LineHeight: React.ComponentType<Props> = props => {
	const { custom_line_height, line_height, group_id } = props;
	const [value, setValue] = useSetPropDebounced({
		prop_key: "line_height",
		initial_value: line_height,
		group_id
	});

	return (
		<Div className={["control-container", "control-container-line_height"]}>
			<ControlTextToggle
				group_id={group_id}
				prop_key="custom_line_height"
				prop_value={custom_line_height}
				label={__("line-height")}
			>
				<RangeValueIndicator value={value} />

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
					value={value}
					onChange={(e, value) => setValue(toFixed(value, 1))}
				/>
			</ControlTextToggle>
		</Div>
	);
};
