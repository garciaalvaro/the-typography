import l, { withControlCustom, addPrefix } from "src/js/both/utils";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

interface Parent extends Typography {
	updateProp: FunctionVoid;
}
type Props = Parent;

const { __ } = wp.i18n;

const options = [
	{ value: "none", label: "none" },
	{ value: "capitalize", label: "capitalize" },
	{ value: "uppercase", label: "uppercase" },
	{ value: "lowercase", label: "lowercase" }
];

const TextTransform: React.ComponentType<Props> = props => {
	const { custom_text_transform, text_transform, updateProp } = props;

	if (!custom_text_transform) {
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
			value={text_transform}
			onChange={e => updateProp("text_transform", e.target.value)}
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
	setting_name: "text_transform",
	label: __("text-transform")
})(TextTransform);
