import l, {
	withTypographyStyle,
	Div,
	Span,
	addPrefix
} from "utils";
import TextField from "@material-ui/core/TextField";

interface Parent extends Typography {
	updateProp: FunctionVoid;
}
type Props = withTypographyStyle & Parent;

const { __, sprintf } = wp.i18n;
const { Fragment } = wp.element;

const Title: React.ComponentType<Props> = props => {
	const {
		title,
		updateProp,
		typography_style,
		_description,
		_namespace_title
	} = props;
	const is_predefined = _namespace_title !== "";

	if (is_predefined) {
		return (
			<Fragment>
				<Span id="namespace-title">
					{sprintf(__("%s. %s"), _namespace_title, title)}
				</Span>
				{_description && <Span id="description">{_description}</Span>}
				<Span
					id="title"
					style={title !== "" && typography_style ? typography_style : {}}
				>
					{title}
				</Span>
			</Fragment>
		);
	}

	return (
		<Div id="title">
			<TextField
				InputLabelProps={{
					classes: {
						root: addPrefix("material_ui-textfield-label"),
						focused: addPrefix("material_ui-textfield-label-focused")
					}
				}}
				InputProps={{
					classes: {
						root: addPrefix("material_ui-textfield-input"),
						focused: addPrefix("material_ui-textfield-input-focused")
					}
				}}
				// @ts-ignore
				inputProps={{
					style: title !== "" && typography_style ? typography_style : {}
				}}
				label={__("Title")}
				value={title}
				onChange={e => updateProp("title", e.target.value)}
			/>
		</Div>
	);
};

export default withTypographyStyle(Title);
