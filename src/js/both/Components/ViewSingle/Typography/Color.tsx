import l, { withControlCustom, withToggle, Span } from "utils";
import { ChromePicker } from "react-color";
import Popover, { ArrowContainer } from "react-tiny-popover";

interface Parent extends Typography {
	updateProp: FunctionVoid;
}
type Props = Parent & withToggle;

const { __ } = wp.i18n;
const { compose } = wp.compose;

const Color: React.ComponentType<Props> = props => {
	const { custom_color, color, updateProp, is_open, close, toggle } = props;

	if (!custom_color) {
		return null;
	}

	return (
		<Popover
			isOpen={is_open}
			position={"top"}
			onClickOutside={close}
			transitionDuration={0.1}
			content={({ position, targetRect, popoverRect }) => (
				<ArrowContainer
					position={position}
					targetRect={targetRect}
					popoverRect={popoverRect}
					arrowColor={"#111"}
					arrowSize={6}
				>
					<ChromePicker
						color={color}
						onChangeComplete={color => {
							if (!color || !color.rgb || !color.rgb.a) {
								return;
							}

							const { r, g, b, a } = color.rgb;
							const rgba = `rgba(${r}, ${g}, ${b}, ${a})`;

							if (color.rgb.a < 1) {
								updateProp("color", rgba);
							} else {
								updateProp("color", color.hex);
							}
						}}
					/>
				</ArrowContainer>
			)}
		>
			<Span
				style={{ color: color !== "" ? color : null }}
				classes="color-indicator"
				onClick={toggle}
			>
				{color === "" ? __("...select a color") : color}
			</Span>
		</Popover>
	);
};

export default compose([
	withToggle,
	withControlCustom({
		setting_name: "color",
		label: __("color")
	})
])(Color);
