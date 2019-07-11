import { assign, pick, keys } from "lodash";
import uuid from "uuid/v4";

import { prepareSelectors } from "utils/tools/prepareSelectors";
import {
	generateDefaultSelectorGroup,
	generateDefaultSelectorGroupStyle
} from "utils/data/defaults";

const selector_group_default = generateDefaultSelectorGroup();
const selector_group_style_default = generateDefaultSelectorGroupStyle();

const prepareSelectorGroupStyle = (
	style_raw: Partial<SelectorGroupStyle>
): SelectorGroupStyle =>
	assign(
		{},
		selector_group_style_default,
		pick(style_raw, keys(selector_group_style_default))
	);

export const prepareSelectorGroups = (
	groups_raw: SelectorGroupRaw[]
): SelectorGroup[] =>
	groups_raw.map(group_raw => {
		const group = assign({}, selector_group_default, pick(
			group_raw,
			keys(selector_group_default)
		) as SelectorGroupRaw);

		if (group._typography_style_defaults) {
			group._typography_style_defaults = prepareSelectorGroupStyle(
				group._typography_style_defaults
			);
		}

		return {
			...group,
			selectors: prepareSelectors(group.selectors),
			id: uuid()
		};
	});
