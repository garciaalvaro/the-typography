import { compact } from "lodash";
import { __ } from "@wordpress/i18n";
import { applyFilters } from "@wordpress/hooks";
import { useState, useEffect } from "@wordpress/element";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import { Span } from "utils/Components";
import { addPrefix } from "utils/tools";
import { fonts as googlefonts } from "utils/data";
import { useSetProp } from "hooks";

type FontVariantOption = {
	value: FontVariant;
	label: string;
};

type Props = {
	font_family: Typography["font_family"];
	font_variant: Typography["font_variant"];
};

const fonts = applyFilters("the_typography.fontsList", googlefonts);

const variant_options: FontVariantOption[] = [
	{ value: "100", label: __("thin 100") },
	{ value: "100i", label: __("thin 100 Italic") },
	{ value: "200", label: __("extra-light 200") },
	{ value: "200i", label: __("extra-light 200 Italic") },
	{ value: "300", label: __("light 300") },
	{ value: "300i", label: __("light 300 Italic") },
	{ value: "400", label: __("regular 400") },
	{ value: "400i", label: __("regular 400 Italic") },
	{ value: "500", label: __("medium 500") },
	{ value: "500i", label: __("medium 500 Italic") },
	{ value: "600", label: __("semi-bold 600") },
	{ value: "600i", label: __("semi-bold 600 Italic") },
	{ value: "700", label: __("bold 700") },
	{ value: "700i", label: __("bold 700 Italic") },
	{ value: "800", label: __("extra-bold 800") },
	{ value: "800i", label: __("extra-bold 800 Italic") },
	{ value: "900", label: __("black 900") },
	{ value: "900i", label: __("black 900 Italic") }
];

export const FontVariant: React.ComponentType<Props> = props => {
	const { font_family, font_variant } = props;
	const setValue = useSetProp();
	const [variants, setVariants] = useState<FontVariantOption[]>([]);

	useEffect(() => {
		if (font_family && fonts[font_family]) {
			setVariants(
				compact(
					fonts[font_family].variants.map(variant =>
						variant_options.find(({ value }) => value === variant)
					)
				)
			);
		} else {
			setVariants([]);
		}
	}, [font_family]);

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
			onChange={e => {
				const value = e.target.value as FontVariantOption["value"];

				setValue("font_variant", value);
			}}
			renderValue={selected_raw => {
				const selected = selected_raw as FontVariant[];

				if (!selected.length) {
					return (
						<Span className="material_ui-select-placeholder">
							{__("Select variants")}
						</Span>
					);
				}

				return selected.join(", ");
			}}
		>
			{variants.map(({ value, label }) => (
				<MenuItem key={value} value={value}>
					{label}
				</MenuItem>
			))}
		</Select>
	);
};
