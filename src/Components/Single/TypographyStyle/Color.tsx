import { __ } from "@wordpress/i18n";
import { ChromePicker } from "react-color";
import Popover, { ArrowContainer } from "react-tiny-popover";

import { Div, Span, ControlTextToggle } from "utils/Components";
import { useToggle } from "utils/hooks";
import { useSetPropDebounced } from "hooks";

interface Props {
	custom_color: Typography["custom_color"];
	color: Typography["color"];
	group_id?: SelectorGroup["id"];
}

export const Color: React.ComponentType<Props> = props => {
	const { custom_color, color, group_id } = props;
	const [value, setValue] = useSetPropDebounced({
		prop_key: "color",
		initial_value: color,
		group_id
	});
	const { is_open, toggle, close } = useToggle();

	return (
		<Div className={["control-container", "control-container-color"]}>
			<ControlTextToggle
				group_id={group_id}
				prop_key="custom_color"
				prop_value={custom_color}
				label={__("color")}
			>
				<Popover
					isOpen={is_open}
					containerStyle={{
						minWidth: "200px",
						zIndex: "999999"
					}}
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
								color={value}
								onChangeComplete={color => {
									if (!color || !color.rgb || !color.rgb.a) {
										return;
									}

									const { r, g, b, a } = color.rgb;
									const rgba = `rgba(${r}, ${g}, ${b}, ${a})`;

									if (color.rgb.a < 1) {
										setValue(rgba);
									} else {
										setValue(color.hex);
									}
								}}
							/>
						</ArrowContainer>
					)}
				>
					<Span
						style={{ color: value ? value : null }}
						className="color-indicator"
						onClick={toggle}
					>
						{value ? value : __("...select a color")}
					</Span>
				</Popover>
			</ControlTextToggle>
		</Div>
	);
};
