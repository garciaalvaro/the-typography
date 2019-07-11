import { reduce } from "lodash";
import { useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import { applyFilters } from "@wordpress/hooks";
import ReactSelect from "react-select";
import { ValueType } from "react-select/src/types";

import { Div, Icon } from "utils/Components";
import { addPrefix } from "utils/tools";
import { plugin_prefix, fonts as googlefonts } from "utils/data";
import { useSetProp } from "hooks";

interface Props {
	font_family: Typography["font_family"];
}

const fonts = applyFilters("the_typography.fontsList", googlefonts);

const options = reduce<Fonts, FontFamily[]>(
	fonts,
	(families, { family }, id) => {
		return [
			...families,
			{
				value: id,
				label: family
			}
		];
	},
	[]
);

export const FontFamily: React.ComponentType<Props> = props => {
	const { font_family } = props;
	const setValue = useSetProp();
	const [selected, setSelected] = useState(
		options.find(({ value }) => value === font_family)
	);

	return (
		<Div className="font_family">
			<ReactSelect
				className={addPrefix("control-react_select")}
				classNamePrefix={plugin_prefix}
				value={selected}
				onChange={(selected: ValueType<FontFamily>) => {
					if (!selected) {
						return;
					}

					selected = selected as FontFamily;

					setSelected(selected);
					setValue("font_family", selected.value);
					setValue("font_variant", ["400"]);
				}}
				options={options}
				placeholder={__("Select a family")}
			/>
			<Icon icon="arrow_down" />
		</Div>
	);
};
