import { __ } from "@wordpress/i18n";
import Slider from "@material-ui/lab/Slider";

import { Div, ControlTextToggle, RangeValueIndicator } from "utils/Components";
import { toFixed, addPrefix } from "utils/tools";
import { useSetPropDebounced } from "hooks";

interface Props {
	custom_letter_spacing: Typography["custom_letter_spacing"];
	letter_spacing: Typography["letter_spacing"];
	group_id?: SelectorGroup["id"];
}

export const LetterSpacing: React.ComponentType<Props> = props => {
	const { custom_letter_spacing, letter_spacing, group_id } = props;
	const [value, setValue] = useSetPropDebounced({
		prop_key: "letter_spacing",
		initial_value: letter_spacing,
		group_id
	});

	return (
		<Div className={["control-container", "control-container-letter_spacing"]}>
			<ControlTextToggle
				group_id={group_id}
				prop_key="custom_letter_spacing"
				prop_value={custom_letter_spacing}
				label={__("letter-spacing")}
			>
				<RangeValueIndicator value={value} unit="px" />

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
					value={value}
					onChange={(e, value) => setValue(toFixed(value, 1))}
				/>
			</ControlTextToggle>
		</Div>
	);
};
