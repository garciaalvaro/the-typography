import l, { Span, pr } from "../index";
import withContainer from "./withContainer";

const { isUndefined } = lodash;
const { Fragment } = wp.element;
const { compose } = wp.compose;

const withControlCustom = ({ label, setting_name }) =>
	compose([
		withContainer([`${pr}-control-container`, `${pr}-setting-${setting_name}`]),
		WrappedComponent => props => {
			const { updateProp, parent_typography } = props;
			const setting_name_custom = `custom_${setting_name}`;
			const toggle_classes = [
				"control-text_toggle",
				props[setting_name_custom] ? "enabled" : "disabled"
			];
			const onClickHandler = () =>
				updateProp(setting_name_custom, !props[setting_name_custom]);
			let parent_value = !isUndefined(parent_typography)
				? parent_typography[setting_name]
				: null;
			let value = props[setting_name];

			if (setting_name === "font_size" || setting_name === "letter_spacing") {
				value = `${value}px`;
				parent_value = `${parent_value}px`;
			}

			return (
				<Fragment>
					<Span className={toggle_classes} onClick={onClickHandler}>
						{label}
					</Span>
					{!props[setting_name_custom] &&
						!isUndefined(parent_typography) &&
						parent_typography[setting_name_custom] && (
							<Span classes="parent_value">{parent_value}</Span>
						)}
					{props[setting_name_custom] && (
						<Fragment>
							{(setting_name === "font_size" ||
								setting_name === "line_height" ||
								setting_name === "letter_spacing") && (
								<Span classes="control-range-value">{value}</Span>
							)}
							<WrappedComponent {...props} />
						</Fragment>
					)}
				</Fragment>
			);
		}
	]);

export default withControlCustom;
