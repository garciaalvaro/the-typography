import l, { withPanel } from "utils";
import Font from "./Typography/Font";
import Color from "./Typography/Color";
import FontSize from "./Typography/FontSize";
import FontStyle from "./Typography/FontStyle";
import FontWeight from "./Typography/FontWeight";
import LineHeight from "./Typography/LineHeight";
import LetterSpacing from "./Typography/LetterSpacing";
import TextTransform from "./Typography/TextTransform";
import TextDecoration from "./Typography/TextDecoration";

interface Parent extends Typography {
	updateProp: FunctionVoid;
}
type Props = withTypographyStyle & Parent;

const ButtonResetDefaults = wp.hooks.applyFilters(
	"thet.pro.ButtonResetDefaults",
	() => null
);

const { __ } = wp.i18n;
const { Fragment } = wp.element;

const Typography: React.ComponentType<Props> = props => {
	const { _typography_style_defaults } = props;

	return (
		<Fragment>
			{_typography_style_defaults && (
				<ButtonResetDefaults
					_typography_style_defaults={_typography_style_defaults}
				/>
			)}
			<Font {...props} />
			<Color {...props} />
			<FontSize {...props} />
			<FontStyle {...props} />
			<FontWeight {...props} />
			<LineHeight {...props} />
			<LetterSpacing {...props} />
			<TextTransform {...props} />
			<TextDecoration {...props} />
		</Fragment>
	);
};

export default withPanel({ id: "typography", label: __("Typography") })(
	Typography
);
