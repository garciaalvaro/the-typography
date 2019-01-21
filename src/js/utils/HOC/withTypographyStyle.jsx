import l from "../index";

const { omitBy, isNil } = lodash;

const getTypographyStyle = ({
	custom_font,
	font_family,
	custom_color,
	color,
	custom_font_weight,
	font_weight,
	custom_font_style,
	font_style,
	custom_text_transform,
	text_transform,
	custom_text_decoration,
	text_decoration,
	custom_font_size,
	font_size,
	custom_line_height,
	line_height,
	custom_letter_spacing,
	letter_spacing
}) => {
	let style = {};

	if (custom_font) {
		style.fontFamily =
			custom_font && font_family !== ""
				? `'${font_family.replace(/_/g, " ")}'`
				: null;
	}

	if (custom_color) {
		style.color = color !== "" ? color : null;
	}

	if (custom_font_weight) {
		style.fontWeight = font_weight;
	}

	if (custom_font_style) {
		style.fontStyle = font_style;
	}

	if (custom_text_transform) {
		style.textTransform = text_transform;
	}

	if (custom_text_decoration) {
		style.textDecoration = text_decoration;
	}

	if (custom_font_size) {
		style.fontSize = `${font_size}px`;
	}

	if (custom_letter_spacing) {
		style.letterSpacing = `${letter_spacing}px`;
	}

	if (custom_line_height) {
		style.lineHeight = line_height;
	}

	style = omitBy(style, isNil);

	return style;
};

const withTypographyStyle = WrappedComponent => props => {
	const typography_style = getTypographyStyle(props);

	return <WrappedComponent typography_style={typography_style} {...props} />;
};

export default withTypographyStyle;
