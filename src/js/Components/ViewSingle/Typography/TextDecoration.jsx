import l, { withControlCustom, pr } from "../../../utils";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const { __ } = wp.i18n;

const options = [
	{ value: "none", label: "none" },
	{ value: "line-through", label: "line-through" },
	{ value: "overline", label: "overline" },
	{ value: "underline", label: "underline" }
];

const TextDecoration = props => {
	const { custom_text_decoration, text_decoration, updateProp } = props;

	if (!custom_text_decoration) {
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
			value={text_decoration}
			onChange={e => updateProp("text_decoration", e.target.value)}
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
	setting_name: "text_decoration",
	label: __("text-decoration")
})(TextDecoration);
