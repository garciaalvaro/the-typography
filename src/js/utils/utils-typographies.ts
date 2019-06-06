import l, {
	selector_defaults,
	selector_group_defaults,
	typography_defaults,
	typography_style_selector_group_defaults,
	typography_style_root_defaults,
	getId,
	getIds,
	getSlug,
	getSlugs
} from "utils";
import uuid from "uuid/v4";

const {
	assign,
	pick,
	keys,
	omitBy,
	head,
	isUndefined,
	isArray,
	castArray,
	compact,
	mapKeys
} = lodash;

const cleanTypographyforDB = (
	typography: Object,
	taxonomies: Object
): Object => {
	let {
		id,
		title,
		context_type,
		context_post_type,
		context_post_type_template,
		// Meta
		selector_groups,
		custom_font,
		font_family,
		font_variant,
		custom_font_size,
		font_size,
		custom_line_height,
		line_height,
		custom_letter_spacing,
		letter_spacing,
		custom_color,
		color,
		custom_font_weight,
		font_weight,
		custom_font_style,
		font_style,
		custom_text_transform,
		text_transform,
		custom_text_decoration,
		text_decoration
	} = typography;

	// Meta
	const meta = {
		selector_groups: JSON.stringify(selector_groups),
		custom_font,
		font_family,
		font_variant,
		custom_font_size,
		font_size,
		custom_line_height,
		line_height,
		custom_letter_spacing,
		letter_spacing,
		custom_color,
		color,
		custom_font_weight,
		font_weight,
		custom_font_style,
		font_style,
		custom_text_transform,
		text_transform,
		custom_text_decoration,
		text_decoration
	};

	context_type = getId(taxonomies.context_type, context_type, "");
	context_type = castArray(context_type);
	context_type = compact(context_type);

	context_post_type = getIds(
		taxonomies.context_post_type,
		context_post_type,
		""
	);
	context_post_type = compact(context_post_type);

	context_post_type_template = getIds(
		taxonomies.context_post_type_template,
		context_post_type_template,
		""
	);
	context_post_type_template = compact(context_post_type_template);

	return {
		...(id !== 0 && { id }),
		title,
		context_type,
		context_post_type,
		context_post_type_template,
		meta
	};
};

const cleanSelectors = (selectors: Object): Selector =>
	selectors.map((selector: Object) => {
		selector = assign(
			{},
			selector_defaults,
			pick(selector, keys(selector_defaults))
		);

		selector.id = uuid();

		return selector;
	});

const cleanSelectorGroups = (selector_groups: Object): SelectorGroup[] =>
	selector_groups.map((group: Object) => {
		group = assign(
			{},
			selector_group_defaults,
			pick(group, keys(selector_group_defaults))
		);

		group.selectors = cleanSelectors(group.selectors);
		group.typography_style_defaults = cleanTypographyStyleSelectorGroup(
			group.typography_style_defaults
		);
		group.id = uuid();

		return group;
	});

const cleanTypographyStyleSelectorGroup = (
	style: Object
): Partial<TypographyStyle> => {
	return assign(
		{},
		typography_style_selector_group_defaults,
		pick(style, keys(typography_style_selector_group_defaults))
	);
};

const cleanTypographyStyleRoot = (
	style: Partial<TypographyStyleWithFont>
): TypographyStyleWithFont => {
	let style_prepared;

	style_prepared = assign(
		{},
		typography_style_root_defaults,
		pick(style, keys(typography_style_root_defaults))
	) as TypographyStyleWithFont;

	// TODO: this shouldnt be necessary
	style_prepared.font_variant = castArray(style_prepared.font_variant);

	return style_prepared;
};

const cleanTypographies = (
	typographies: Object,
	taxonomies: Object
): Typography[] =>
	typographies.map((typography: Object) => {
		let {
			id,
			title,
			context_type,
			context_post_type,
			context_post_type_template,
			meta
		} = typography;

		// Clean empty meta values
		meta = omitBy(meta, (value, key) => {
			if (key === "_id") {
				return true;
			}

			if ((key === "font_size" || key === "line_height") && value === 0) {
				return true;
			}

			if (value === "") {
				return true;
			}

			return false;
		});

		// Remove initial underscore from private keys.
		meta = mapKeys(meta, (value, key) => key.replace(/^_/, ""));

		// Prepare title
		title = title.rendered;

		// As the taxonomy returns an array we get the first element or return a default.
		context_type = head(context_type) || "";

		// Get the taxonomy slug from the given taxonomy id
		context_type = getSlug(taxonomies.context_type, context_type, "");
		context_post_type = getSlugs(
			taxonomies.context_post_type,
			context_post_type,
			""
		);
		context_post_type_template = getSlugs(
			taxonomies.context_post_type_template,
			context_post_type_template,
			""
		);

		// Prepare selectors
		let selector_groups_raw;
		selector_groups_raw = isUndefined(meta.selector_groups)
			? []
			: JSON.parse(meta.selector_groups);
		selector_groups_raw = !isArray(selector_groups_raw)
			? []
			: selector_groups_raw;
		const selector_groups = cleanSelectorGroups(selector_groups_raw);

		// Prepare typography_style_defaults
		const typography_style_defaults = isUndefined(
			meta.typography_style_defaults
		)
			? null
			: cleanTypographyStyleRoot(JSON.parse(meta.typography_style_defaults));

		const typography_clean = {
			...meta,
			id,
			title,
			context_type,
			context_post_type,
			context_post_type_template,
			selector_groups,
			typography_style_defaults
		};

		return assign(
			{},
			typography_defaults,
			pick(typography_clean, keys(typography_defaults))
		);
	});

export { cleanTypographyforDB, cleanTypographies };
