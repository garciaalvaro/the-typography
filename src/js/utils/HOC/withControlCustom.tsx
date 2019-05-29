import l, { Span } from "utils";
import withContainer from "./withContainer";

const { isUndefined } = lodash;
const { Fragment } = wp.element;
const { compose } = wp.compose;

interface withControlCustom {
	label: string;
	setting_name: keyof TypographyStyleWithFont | "font";
}
interface withParentTypographyStyle {
	parent_typography: TypographyStyleWithFont;
}
interface withUpdateProp {
	updateProp: FunctionVoid;
}
type Props = TypographyStyle &
	withParentTypographyStyle &
	withUpdateProp &
	withControlCustom;

const withControlCustom = ({ label, setting_name }: withControlCustom) =>
	compose([
		withContainer(["control-container", `setting-${setting_name}`]),
		<P extends Props>(
			WrappedComponent: React.ComponentType<P>
		): React.ComponentType<P> => props => {
			const {
				updateProp,
				parent_typography
			}: { updateProp: FunctionVoid; parent_typography: any } = props;
			// @ts-ignore
			const setting_name_custom: keyof TypographyStyleCustomProps = `custom_${setting_name}`;
			const toggle_classes = [
				"control-text_toggle",
				props[setting_name_custom] ? "enabled" : "disabled"
			];
			const onClickHandler = () =>
				updateProp(setting_name_custom, !props[setting_name_custom]);
			let parent_value = !isUndefined(parent_typography)
				? parent_typography[setting_name]
				: null;
			// @ts-ignore
			let value = props[setting_name];

			if (setting_name === "font_size" || setting_name === "letter_spacing") {
				value = `${value}px`;
				parent_value = `${parent_value}px`;
			}

			return (
				<Fragment>
					<Span classes={toggle_classes} onClick={onClickHandler}>
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
