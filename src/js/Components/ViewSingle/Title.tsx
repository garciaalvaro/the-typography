import l, { withTypographyStyle, Div, Span, addPrefix } from "utils";
import TextField from "@material-ui/core/TextField";

interface Parent extends Typography {
	updateProp: FunctionVoid;
}
type Props = withTypographyStyle & Parent;

const { __ } = wp.i18n;
const { Fragment } = wp.element;

const Title: React.ComponentType<Props> = props => {
	const { title, updateProp, typography_style, description } = props;
	const custom = true;

	if (custom) {
		return (
			<Fragment>
				<Span
					id="title"
					style={title !== "" && typography_style ? typography_style : {}}
				>
					{title}
				</Span>
				{description && <Span id="description">{description}</Span>}
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
