import l from "utils";

interface withState extends setState<withState> {
	typography_style: Partial<TypographyStyleCamelCase>;
}
type Props = withState & Partial<TypographyStyleWithFont>;

const { omitBy, isNil, pick, isEqual, isUndefined } = lodash;
const { Component } = wp.element;
const { compose, withState } = wp.compose;

const withTypographyStyle = <P extends Props>(
	WrappedComponent: React.ComponentType<P>
) =>
	class extends Component<P> {
		componentDidMount() {
			this.updateStyle();
		}

		componentDidUpdate(prev_props: P) {
			const properties = [
				"custom_font",
				"font_family",
				"custom_color",
				"color",
				"custom_font_weight",
				"font_weight",
				"custom_font_style",
				"font_style",
				"custom_text_transform",
				"text_transform",
				"custom_text_decoration",
				"text_decoration",
				"custom_font_size",
				"font_size",
				"custom_line_height",
				"line_height",
				"custom_letter_spacing",
				"letter_spacing"
			];

			if (
				!isEqual(pick(this.props, properties), pick(prev_props, properties))
			) {
				this.updateStyle();
			}
		}

		updateStyle() {
			const {
				setState,
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
			} = this.props;

			const style: Object = {};

			if (custom_font && font_family) {
				style.fontFamily =
					custom_font && font_family !== ""
						? `'${font_family.replace(/_/g, " ")}'`
						: null;
			}

			if (custom_color && color) {
				style.color = color;
			}

			if (custom_font_weight && font_weight) {
				style.fontWeight = font_weight;
			}

			if (custom_font_style && font_style) {
				style.fontStyle = font_style;
			}

			if (custom_text_transform && text_transform) {
				style.textTransform = text_transform;
			}

			if (custom_text_decoration && text_decoration) {
				style.textDecoration = text_decoration;
			}

			if (custom_font_size && !isUndefined(font_size)) {
				style.fontSize = `${font_size}px`;
			}

			if (custom_letter_spacing && !isUndefined(letter_spacing)) {
				style.letterSpacing = `${letter_spacing}px`;
			}

			if (custom_line_height && !isUndefined(line_height)) {
				style.lineHeight = line_height;
			}

			setState({
				typography_style: omitBy(style, isNil)
			});
		}

		render() {
			return <WrappedComponent {...this.props} />;
		}
	};

export default compose([
	withState({ typography_style: {} }),
	withTypographyStyle
]);
