import l, { Span } from "utils";

interface Parent extends SelectorGroup {
	updateProp: FunctionVoid;
	parent_typography_style: Partial<TypographyStyle>;
}
type Props = Parent & withToggle & withTypographyStyle;

const { __ } = wp.i18n;

const TitlePreview: React.ComponentType<Props> = props => {
	let {
		custom_title,
		title,
		toggle,
		parent_typography_style,
		typography_style,
		custom_typography
	} = props;

	typography_style = custom_typography ? typography_style : {};

	const typography_style_prepared = {
		...parent_typography_style,
		...typography_style
	};
	const { lineHeight, ...style } = typography_style_prepared;

	return (
		<Span style={style} onClick={toggle} classes="selector_group-title-preview">
			{!custom_title || title === "" ? __("Sample text") : title}
		</Span>
	);
};

export default TitlePreview;
