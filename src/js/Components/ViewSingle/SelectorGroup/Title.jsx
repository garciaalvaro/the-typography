import l, { Div, Span } from "../../../utils";
import TextField from "@material-ui/core/TextField";

const { __ } = wp.i18n;
const { Fragment } = wp.element;

const Title = props => {
	const { custom_title, title, updateProp } = props;

	return (
		<Fragment>
			<Span
				classes={["control-text_toggle", custom_title ? "enabled" : "disabled"]}
				onClick={() => updateProp("custom_title", !custom_title)}
			>
				{__("Use a title for this group")}
			</Span>
			{custom_title && (
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
					placeholder={__("enter a title")}
					value={title}
					onChange={e => updateProp("title", e.target.value)}
				/>
			)}
		</Fragment>
	);
};

export default Title;
