import l, { withTypographyStyle, Div, addPrefix } from "utils";
import TextField from "@material-ui/core/TextField";

interface Parent extends Typography {
	updateProp: FunctionVoid;
}
type Props = withTypographyStyle & Parent;

const { __ } = wp.i18n;

const Title: React.ComponentType<Props> = props => {
	const { title, updateProp, typography_style } = props;

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
