import l, { Span, pr, fonts, fonts_variants } from "../../../utils";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const { isUndefined, find } = lodash;
const { __ } = wp.i18n;

const FontVariant = props => {
	const { font_family, font_variant, updateProp, updateGFont } = props;

	const onChangeHandler = value => {
		updateProp("font_variant", value);
		updateGFont(font_family, value);
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
				root: `${pr}-material_ui-select-root`,
				select: `${pr}-material_ui-select-select`
			}}
			className={`${pr}-material_ui-select-container`}
			MenuProps={{
				classes: {
					paper: `${pr}-material_ui-select-menu`
				}
			}}
			multiple
			displayEmpty
			value={font_variant}
			onChange={e => onChangeHandler(e.target.value)}
			renderValue={selected => {
				if (selected.length === 0) {
					return (
						<Span className={`${pr}-material_ui-select-placeholder`}>
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
