import { assign, pick, keys, omitBy, isArray } from "lodash";
import { decodeEntities } from "@wordpress/html-entities";

import { prepareSelectorGroups } from "utils/tools/prepareSelectorGroups";
import { prepareTaxonomies } from "utils/tools/prepareTaxonomies";
import {
	generateDefaultTypography,
	generateDefaultTypographyStyle
} from "utils/data/defaults";

const default_typography = generateDefaultTypography();
const default_typography_style = generateDefaultTypographyStyle();

const prepareTypographyStyle = (
	style_raw: Partial<TypographyStyle>
): TypographyStyle =>
	assign(
		{},
		default_typography_style,
		pick(style_raw, keys(default_typography_style))
	);

export const prepareTypography = (
	typography_raw: TypographyRaw,
	taxonomies_data: Taxonomies
): Typography => {
	const {
		id,
		title: title_raw,
		context_type,
		context_post_type,
		context_post_type_template,
		meta: meta_raw
	} = typography_raw;

	// Prepare selector groups
	let selector_groups;
	selector_groups = meta_raw.selector_groups
		? JSON.parse(meta_raw.selector_groups)
		: null;
	selector_groups = isArray(selector_groups) ? selector_groups : [];
	selector_groups = prepareSelectorGroups(selector_groups);

	// Prepare title
	const title = decodeEntities(title_raw.rendered);

	// Prepare meta
	// Remove empty meta values. When there is no value saved the JSON returns
	// a default based on the type ('' if string, 0 if number). We remove these
	// as the typography meta values have belong to specific types. Later we
	// merge the defaults for any removed meta key.
	const meta = omitBy(meta_raw, (value, key) => {
		// These number values do not have 0 as a possible value.
		if ((key === "font_size" || key === "line_height") && value === 0) {
			return true;
		}

		if (value === "") {
			return true;
		}

		return false;
	});

	// Prepare _typography_style_defaults
	let _typography_style_defaults;
	_typography_style_defaults = meta._typography_style_defaults
		? JSON.parse(meta._typography_style_defaults)
		: null;
	_typography_style_defaults = _typography_style_defaults
		? prepareTypographyStyle(_typography_style_defaults)
		: null;

	// Prepare taxonomies
	const taxonomies = prepareTaxonomies(
		{
			context_type,
			context_post_type,
			context_post_type_template
		},
		taxonomies_data
	);

	let typography;
	typography = {
		...meta,
		...taxonomies,
		title,
		selector_groups,
		_typography_style_defaults,
		id
	};
	typography = assign(
		{},
		default_typography,
		pick(typography, keys(default_typography))
	);

	return typography;
};
