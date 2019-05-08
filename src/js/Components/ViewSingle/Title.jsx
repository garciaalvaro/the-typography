import l, { withTypographyStyle, Div, pr } from "../../utils";
import TextField from "@material-ui/core/TextField";

const { __ } = wp.i18n;

const Title = props => {
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
				inputProps={{
					style: title !== "" ? typography_style : null
				}}
				label={__("Title")}
				value={title}
				onChange={e => updateProp("title", e.target.value)}
			/>
		</Div>
	);
};

export default withTypographyStyle(Title);
