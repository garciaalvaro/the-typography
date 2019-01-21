import l, { Span, Div, pr, generateClassName } from "../../../utils";
import Color from "../Typography/Color";
import FontSize from "../Typography/FontSize";
import FontStyle from "../Typography/FontStyle";
import FontWeight from "../Typography/FontWeight";
import LineHeight from "../Typography/LineHeight";
import LetterSpacing from "../Typography/LetterSpacing";
import TextTransform from "../Typography/TextTransform";
import TextDecoration from "../Typography/TextDecoration";

const { __ } = wp.i18n;
const { Fragment } = wp.element;

const Typography = props => {
	const { custom_typography, updateProp } = props;

	return (
		<Fragment>
			<Span
				className={generateClassName([
					`${pr}-control-text_toggle`,
					custom_typography ? `${pr}-enabled` : `${pr}-disabled`
				])}
				onClick={() => updateProp("custom_typography", !custom_typography)}
			>
				{__("Use custom typography")}
			</Span>
			{custom_typography && (
				<Div className={`${pr}-selector_group-typography`}>
					<Color {...props} />
					<FontSize {...props} />
					<FontStyle {...props} />
					<FontWeight {...props} />
					<LineHeight {...props} />
					<LetterSpacing {...props} />
					<TextTransform {...props} />
					<TextDecoration {...props} />
				</Div>
			)}
		</Fragment>
	);
};

export default Typography;
