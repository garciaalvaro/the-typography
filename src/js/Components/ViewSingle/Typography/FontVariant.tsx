import l, { Span, addPrefix, fonts, fonts_variants } from "utils";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

interface Parent extends Typography {
	addGFont: FunctionVoid;
	updateProp: FunctionVoid;
}
type Props = Parent;

const { isUndefined, find, compact } = lodash;
const { __ } = wp.i18n;

const FontVariant: React.ComponentType<Props> = props => {
	const { id, font_family, font_variant, updateProp, addGFont } = props;
	const onChangeHandler = (value: any) => {
		updateProp("font_variant", value);
		addGFont(id, font_family, value);
	};
	const font = fonts[font_family];
	const options: { value: string; label: string }[] = isUndefined(font)
		? []
		: compact(
				font.variants.map(variant => {
					const font_variant = find(fonts_variants, { value: variant });
					if (!font_variant) {
						return null;
					}

					return font_variant;
				})
		  );

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
			multiple
			displayEmpty
			value={font_variant}
			onChange={e => onChangeHandler(e.target.value)}
			// @ts-ignore
			renderValue={(selected: typeof font_variant) => {
				if (!selected.length) {
					return (
						<Span classes="material_ui-select-placeholder">
							{__("Select variants")}
						</Span>
					);
				}

				selected = selected.map(variant => {
					const font_variant = fonts_variants.find(
						({ value }) => variant === value
					);

					if (!font_variant) {
						return "";
					}

					return font_variant.label;
				});
				selected = compact(selected);

				return selected.join(", ");
			}}
		>
			{options.map(({ value, label }) => (
				<MenuItem key={value} value={value}>
					{label}
				</MenuItem>
			))}
		</Select>
	);
};

export default FontVariant;
