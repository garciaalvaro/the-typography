import l, { withControlCustom, pr } from "../../../utils";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const { __ } = wp.i18n;

const options = [
	{ value: "100", label: __("thin 100") },
	{ value: "200", label: __("extra-light 200") },
	{ value: "300", label: __("light 300") },
	{ value: "400", label: __("regular 400") },
	{ value: "500", label: __("medium 500") },
	{ value: "600", label: __("semi-bold 600") },
	{ value: "700", label: __("bold 700") },
	{ value: "800", label: __("extra-bold 800") },
	{ value: "900", label: __("black 900") }
];

const FontWeight = props => {
	const { custom_font_weight, font_weight, updateProp } = props;

	if (!custom_font_weight) {
		return null;
	}

	return (
		<Select
			classes={{
				root: `${pr}-material_ui-select-root`,
				select: `${pr}-material_ui-select-select`
			}}
			className={`${pr}-material_ui-select-container`}
			MenuProps={{
				classes: {
					paper: `${pr}-material_ui-select-menu`
				}
			}}
			value={font_weight}
			onChange={e => updateProp("font_weight", e.target.value)}
		>
			{options.map(({ value, label }) => (
				<MenuItem key={value} value={value}>
					{label}
				</MenuItem>
			))}
		</Select>
	);
};

export default withControlCustom({
	setting_name: "font_weight",
	label: __("font-weight")
})(FontWeight);
