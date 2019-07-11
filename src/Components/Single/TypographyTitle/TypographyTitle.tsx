import { __, sprintf } from "@wordpress/i18n";
import { Fragment } from "@wordpress/element";
import { useSelect } from "@wordpress/data";
import TextField from "@material-ui/core/TextField";

import { Div, Span } from "utils/Components";
import { addPrefix } from "utils/tools";
import { store_slug } from "utils/data";
import { useSetProp, useTypographyStyle, useIsPredefinedSingle } from "hooks";

export const TypographyTitle: React.ComponentType = props => {
	const { _description, _namespace_title } = useSelect<{
		_description: Typography["_description"];
		_namespace: Typography["_namespace"];
		_namespace_title: Typography["_namespace_title"];
	}>(select => select(store_slug).getPredefinedProps());

	const title = useSelect<State["single"]["title"]>(select =>
		select(store_slug).getTitle()
	);
	const style = useTypographyStyle();
	const setValue = useSetProp();
	const is_predefined = useIsPredefinedSingle();

	if (is_predefined) {
		return (
			<Fragment>
				<Span id="single-namespace-title">
					{sprintf(__("%s. %s"), _namespace_title, title)}
				</Span>

				{_description && (
					<Span id="single-description" className="description">
						{_description}
					</Span>
				)}

				<Span id="single-title" style={title && style ? style : {}}>
					{title}
				</Span>
			</Fragment>
		);
	}

	return (
		<Div id="single-title">
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
					style: title && style ? style : {}
				}}
				label={__("Title")}
				value={title}
				onChange={e => setValue("title", e.target.value)}
			/>
		</Div>
	);
};
