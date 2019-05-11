import l, { Span, addPrefix, fonts, fonts_variants } from "utils";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const { isUndefined, find } = lodash;
const { __ } = wp.i18n;

const FontVariant = props => {
	const { font_family, font_variant, updateProp, addGFont } = props;

	const onChangeHandler = value => {
		updateProp("font_variant", value);
		addGFont(font_family, value);
	};

	const getVariants = () => {
		const font = fonts[font_family];

		if (isUndefined(font)) {
			return [];
		}

		const variants = font.variants.map(variant =>
			find(fonts_variants, { value: variant })
		);

		return variants;
	};

	const options = getVariants();

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
			renderValue={selected => {
				if (!selected.length) {
					return (
						<Span classes="material_ui-select-placeholder">
							{__("Select variants")}
						</Span>
					);
				}

				return selected
					.map(
						variant =>
							fonts_variants.find(({ value }) => variant === value).label
					)
					.join(", ");
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
