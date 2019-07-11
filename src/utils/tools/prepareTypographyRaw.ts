import { omitBy, castArray, compact, pick } from "lodash";

import { getTermId, getTermsId } from "utils/tools/terms";
import {
	generateDefaultSelector,
	generateDefaultSelectorGroup
} from "utils/data/defaults";

const prepareSelectorGroups = (
	selector_groups: SelectorGroup[]
): SelectorGroupRaw[] =>
	selector_groups.map(({ id, selectors, ...props_to_be_saved }) => {
		// Omit props with default value
		const selector_group_default = generateDefaultSelectorGroup();
		const selector_default = generateDefaultSelector();
		const props_to_be_saved_prepared = omitBy<any>(
			props_to_be_saved,
			(val, key: keyof Omit<SelectorGroup, "id">) =>
				val === selector_group_default[key]
		);

		return {
			...props_to_be_saved_prepared,
			selectors: selectors.map(
				({ id, ...props_to_be_saved }): SelectorRaw => {
					// Omit props with default value
					return omitBy<any>(props_to_be_saved, (val, key: keyof Selector) => {
						if (key === "id") {
							return true;
						}
						if (val === selector_default[key]) {
							return true;
						}

						return false;
					});
				}
			)
		};
	});

const prepareTaxonomies = (
	{
		context_type,
		context_post_type,
		context_post_type_template
	}: Pick<
		Typography,
		"context_type" | "context_post_type" | "context_post_type_template"
	>,
	taxonomies: Taxonomies
) => {
	// Context type
	let context_type_prepared;
	context_type_prepared = getTermId(taxonomies.context_type, context_type);
	context_type_prepared = castArray(context_type_prepared);
	context_type_prepared = compact(context_type_prepared);

	// Context post type
	let context_post_type_prepared;
	context_post_type_prepared = getTermsId(
		taxonomies.context_post_type,
		context_post_type
	);
	context_post_type_prepared = compact(context_post_type_prepared);

	// Context post type template
	let context_post_type_template_prepared;
	context_post_type_template_prepared = getTermsId(
		taxonomies.context_post_type_template,
		context_post_type_template
	);
	context_post_type_template_prepared = compact(
		context_post_type_template_prepared
	);

	return {
		context_type: context_type_prepared,
		context_post_type: context_post_type_prepared,
		context_post_type_template: context_post_type_template_prepared
	};
};

const prepareMeta = (typography: Typography) => ({
	selector_groups: JSON.stringify(
		prepareSelectorGroups(typography.selector_groups)
	),
	...pick(typography, [
		"is_active",
		"custom_font",
		"font_family",
		"font_variant",
		"custom_font_size",
		"font_size",
		"custom_line_height",
		"line_height",
		"custom_letter_spacing",
		"letter_spacing",
		"custom_color",
		"color",
		"custom_font_weight",
		"font_weight",
		"custom_font_style",
		"font_style",
		"custom_text_transform",
		"text_transform",
		"custom_text_decoration",
		"text_decoration"
	])
});

export const prepareTypographyRaw = (
	typography: Typography,
	taxonomies: Taxonomies
): TypographyRawToUpload => {
	const typography_prepared: TypographyRawToUpload = {
		...prepareTaxonomies(typography, taxonomies),
		title: typography.title,
		meta: prepareMeta(typography),
		status: "publish"
	};

	if (typography.id !== 0) {
		typography_prepared.id = typography.id;
	}

	return typography_prepared;
};
