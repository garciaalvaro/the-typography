import l, { Div, withControlCustom, pr_store } from "../../../utils";
import FontFamily from "./FontFamily";
import FontVariant from "./FontVariant";

const { __ } = wp.i18n;
const { compose } = wp.compose;
const { withDispatch } = wp.data;

const Font = props => {
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
		const { updateGFont } = dispatch(pr_store);

		return {
			updateGFont
		};
	}),
	withControlCustom({
		setting_name: "font",
		label: __("font")
	})
])(Font);
