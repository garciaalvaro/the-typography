import l, { Div, withControlCustom, pr_store } from "utils";
import FontFamily from "./FontFamily";
import FontVariant from "./FontVariant";

interface withDispatch {
	addGFont: FunctionVoid;
}
interface Parent extends Typography {
	updateProp: FunctionVoid;
}
type Props = withDispatch & Parent & withToggle;

const { __ } = wp.i18n;
const { compose } = wp.compose;
const { withDispatch } = wp.data;

const Font: React.ComponentType<Props> = props => {
	const { custom_font, font_family } = props;

	if (!custom_font) {
		return null;
	}

	return (
		<Div classes="font-container">
			<FontFamily {...props} />
			{font_family !== "" && <FontVariant {...props} />}
		</Div>
	);
};

export default compose([
	withDispatch(dispatch => {
		const { addGFont } = dispatch(pr_store);

		return {
			addGFont
		};
	}),
	withControlCustom({
		setting_name: "font",
		label: __("font")
	})
])(Font);
