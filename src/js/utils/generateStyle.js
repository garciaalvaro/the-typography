import l from ".";

const { isEmpty, cloneDeep, forOwn, forEach } = lodash;

const prepareFontFamily = props => {
	if (props["font_family"] !== "" && props["custom_font"]) {
		props["font_family"] = props["font_family"].replace(/_/g, " ");
		props["font_family"] = `'${props["font_family"]}'`;
	} else {
		const { font_family: omit_prop, ...without_omitted } = props;
		props = without_omitted;
	}

	return props;
};

const cleanStyleProps = props => {
	const style_keys = [
		"font_family",
		"color",
		"font_size",
		"line_height",
		"letter_spacing",
		"font_style",
		"font_weight",
		"text_transform",
		"text_decoration"
	];

	props["styles"] = {};

	forOwn(props, (prop_value, prop_key) => {
		if (!style_keys.includes(prop_key)) {
			return;
		}

		if (prop_key === "font_family") {
			props["styles"][prop_key] = prop_value;

			const { [prop_key]: omit_prop, ...without_omitted } = props;
			props = without_omitted;

			return;
		}

		if (props[`custom_${prop_key}`]) {
			props["styles"][prop_key] = prop_value;
		}

		const {
			[`custom_${prop_key}`]: omit_prop_1,
			[prop_key]: omit_prop_2,
			...without_omitted
		} = props;
		props = without_omitted;
	});

	return props;
};

const addStyle = typography_props => {
	if (isEmpty(typography_props["selector_groups"])) {
		return [];
	}

	const style = [];

	forEach(typography_props["selector_groups"], group_props => {
		if (isEmpty(group_props["selectors"])) {
			return;
		}

		group_props = cleanStyleProps(group_props);

		// Merge root style with the group style
		group_props["styles"] = {
			...typography_props["styles"],
			...group_props["styles"]
		};

		style.push(group_props);
	});

	return style;
};

const generateStylesString = groups => {
	let styles_string = "";

	forEach(groups, group => {
		let style_string = "";
		const important = group["force_styles"] ? "!important" : "";

		forOwn(group["styles"], (value, key) => {
			value =
				"font_size" === key || "letter_spacing" === key ? `${value}px` : value;

			key = key.replace("_", "-");

			style_string = `${style_string}${key}:${value}${important};`;
		});

		const selectors_string = generate_selectors_string(group);

		if (selectors_string !== "") {
			styles_string = `${styles_string}${selectors_string}{${style_string}}`;
		}
	});

	return styles_string;
};

const generate_selectors_string = (style = {}) => {
	const selectors_array = [];
	const parent_selector =
		!style["custom_parent_selector"] || style["parent_selector"] === ""
			? ""
			: `${style["parent_selector"]} `;

	forEach(style["selectors"], selector => {
		if (
			"text" === selector["selector_type"] &&
			selector["text_selector"] !== ""
		) {
			selectors_array.push(parent_selector + selector["text_selector"]);
		} else if (
			"block" === selector["selector_type"] &&
			selector["block_selector_root"] !== ""
		) {
			const selector_string =
				selector["block_selector_extra"] === ""
					? selector["block_selector_root"]
					: `${selector["block_selector_root"]} ${
							selector["block_selector_extra"]
					  }`;

			selectors_array.push(parent_selector + selector_string);
		}
	});

	return selectors_array.join(",");
};

const generateStyle = typography => {
	let typography_props;
	typography_props = cloneDeep(typography);
	typography_props = prepareFontFamily(typography_props);
	typography_props = cleanStyleProps(typography_props);

	const styles_array = addStyle(typography_props);
	const style = generateStylesString(styles_array);

	return style;
};

export default generateStyle;
