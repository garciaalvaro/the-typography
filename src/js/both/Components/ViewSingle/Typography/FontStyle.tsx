import l, { withControlCustom, addPrefix } from "src/js/both/utils";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

interface Parent extends Typography {
	updateProp: FunctionVoid;
}
type Props = Parent;

const { __ } = wp.i18n;

const options = [
	{ value: "italic", label: "italic" },
	{ value: "normal", label: "normal" },
	{ value: "oblique", label: "oblique" }
];

const FontStyle: React.ComponentType<Props> = props => {
	const { custom_font_style, font_style, updateProp } = props;

	if (!custom_font_style) {
		return null;
	}

	return (
		<Select
			classes={{
				root: addPrefix("material_ui-select-root"),
				select: addPrefix("material_ui-select-select")
			}}
			className={addPrefix("material_ui-select-container")}
			MenuProps={{
				classes: {
					paper: addPrefix("material_ui-select-menu")
				}
			}}
			value={font_style}
			onChange={e => updateProp("font_style", e.target.value)}
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
	setting_name: "font_style",
	label: __("font-style")
})(FontStyle);
