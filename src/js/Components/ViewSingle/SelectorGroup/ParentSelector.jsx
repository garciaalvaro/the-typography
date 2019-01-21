import l, { Span, pr, generateClassName } from "../../../utils";
import TextField from "@material-ui/core/TextField";

const { __ } = wp.i18n;
const { Fragment } = wp.element;

const ParentSelector = props => {
	const { custom_parent_selector, parent_selector, updateProp } = props;

	return (
		<Fragment>
			<Span
				className={generateClassName([
					`${pr}-control-text_toggle`,
					custom_parent_selector ? `${pr}-enabled` : `${pr}-disabled`
				])}
				onClick={() =>
					updateProp("custom_parent_selector", !custom_parent_selector)
				}
			>
				{__("Use a parent selector")}
			</Span>
			{custom_parent_selector && (
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
					placeholder={__("enter a CSS selector")}
					value={parent_selector}
					onChange={e => updateProp("parent_selector", e.target.value)}
				/>
			)}
		</Fragment>
	);
};

export default ParentSelector;
