import l, { Span, pr, generateClassName } from "../../../utils";

const { __ } = wp.i18n;

const ForceStyles = props => {
	const { force_styles, updateProp } = props;

	return (
		<Span
			className={generateClassName([
				`${pr}-control-text_toggle`,
				force_styles ? `${pr}-enabled` : `${pr}-disabled`
			])}
			onClick={() => updateProp("force_styles", !force_styles)}
		>
			{__("Force styles using !important")}
		</Span>
	);
};

export default ForceStyles;
