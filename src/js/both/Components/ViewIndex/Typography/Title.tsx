import l, { withTypographyStyle, Div, Span } from "src/js/both/utils";

interface Parent {
	title: Typography["title"];
	openSingle: FunctionVoid;
	typography_style: Object;
}
type Props = Parent;

const { __ } = wp.i18n;

const Title: React.ComponentType<Props> = props => {
	const { title, openSingle, typography_style } = props;

	return (
		<Div
			classes="index-typography-title"
			onClick={openSingle}
			style={typography_style}
		>
			<Span>{title === "" ? __("...enter a Title") : title}</Span>
		</Div>
	);
};

export default withTypographyStyle(Title);
