import { __ } from "@wordpress/i18n";
import Slider from "@material-ui/core/Slider";

import { Div, ControlTextToggle, RangeValueIndicator } from "utils/Components";
import { addPrefix } from "utils/tools";
import { useSetPropDebounced } from "hooks";

type Props = {
	custom_font_size: Typography["custom_font_size"];
	font_size: Typography["font_size"];
	group_id?: SelectorGroup["id"];
};

export const FontSize: React.ComponentType<Props> = props => {
	const { custom_font_size, font_size, group_id } = props;
	const [value, setValue] = useSetPropDebounced({
		prop_key: "font_size",
		initial_value: font_size,
		group_id
	});

	return (
		<Div className={["control-container", "control-container-font_size"]}>
			<ControlTextToggle
				group_id={group_id}
				prop_key="custom_font_size"
				prop_value={custom_font_size}
				label={__("font-size")}
			>
				<RangeValueIndicator value={value} unit="px" />

				<Slider
					classes={{
						thumb: addPrefix("material_ui-range-thumb"),
						track: addPrefix("material_ui-range-track"),
						root: addPrefix("material_ui-range-root")
					}}
					min={5}
					max={80}
					step={1}
					value={value}
					onChange={(e, value) => setValue(value)}
				/>
			</ControlTextToggle>
		</Div>
	);
};
