import l, { withTypographyStyle, Div, Span } from "../../utils";

const { __ } = wp.i18n;

const Title = props => {
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
