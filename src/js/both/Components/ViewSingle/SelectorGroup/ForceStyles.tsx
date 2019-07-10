import l, { Span } from "utils";

interface Parent extends SelectorGroup {
	updateProp: FunctionVoid;
}
type Props = Parent;

const { __ } = wp.i18n;

const ForceStyles: React.ComponentType<Props> = props => {
	const { force_styles, updateProp } = props;

	return (
		<Span
			classes={["control-text_toggle", force_styles ? "enabled" : "disabled"]}
			onClick={() => updateProp("force_styles", !force_styles)}
		>
			{__("Force styles using !important")}
		</Span>
	);
};

export default ForceStyles;
