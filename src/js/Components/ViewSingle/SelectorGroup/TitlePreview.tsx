import l, { Span } from "utils";

interface Parent extends SelectorGroup {
	updateProp: FunctionVoid;
	parent_typography_style: Partial<TypographyStyle>;
}
type Props = Parent & withToggle & withTypographyStyle;

const { noop } = lodash;
const { __ } = wp.i18n;
const { Fragment } = wp.element;

const TitlePreview: React.ComponentType<Props> = props => {
	let {
		custom_title,
		title,
		toggle,
		parent_typography_style,
		typography_style,
		custom_typography,
		_description,
		open
	} = props;

	typography_style = custom_typography ? typography_style : {};

	const typography_style_prepared = {
		...parent_typography_style,
		...typography_style
	};
	const { lineHeight, ...style } = typography_style_prepared;

	return (
		<Fragment>
			<Span
				style={style}
				onClick={toggle}
				classes="selector_group-title-preview"
			>
				{!custom_title || title === "" ? __("Sample text") : title}
			</Span>
			{_description && (
				<Span
					classes="description"
					onClick={() => {
						open ? open() : noop;
					}}
				>
					{_description}
				</Span>
			)}
		</Fragment>
	);
};

export default TitlePreview;
