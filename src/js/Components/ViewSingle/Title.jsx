import l, { withTypographyStyle, Div, pr } from "../../utils";
import TextField from "@material-ui/core/TextField";

const { __ } = wp.i18n;

const Title = props => {
	const { title, updateProp, typography_style } = props;

	return (
		<Div id={`${pr}-title`}>
			<TextField
				InputLabelProps={{
					classes: {
						root: `${pr}-material_ui-textfield-label`,
						focused: `${pr}-material_ui-textfield-label-focused`
					}
				}}
				InputProps={{
					classes: {
						root: `${pr}-material_ui-textfield-input`,
						focused: `${pr}-material_ui-textfield-input-focused`
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
