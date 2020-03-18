import { castArray, isUndefined, isString } from "lodash";
import Popover, { ArrowContainer } from "react-tiny-popover";

import "./ButtonPopover.styl";
import { Icons } from "utils/data/icons";
import { Icon } from "utils/Components/Icon";
import { Div } from "utils/Components/Div";
import { Button } from "utils/Components/Button";
import { useToggle } from "utils/hooks/useToggle";

type Props = {
	click: Function;
	className: string | string[];
	label: string;
	icon: keyof Icons | React.ReactNode;
	show_popover?: boolean;
	id?: string;
};

export const ButtonPopover: React.ComponentType<Props> = props => {
	const { click, label, className, icon, id } = props;

	const { is_open, toggle, close } = useToggle();

	const show_popover = isUndefined(props.show_popover)
		? true
		: props.show_popover;

	return (
		<Popover
			isOpen={show_popover && is_open}
			containerStyle={{
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
					<Div className={["menu", "color_scheme-type-dark"]}>
						<Button
							className={["button", "button-menu"]}
							onClick={() => {
								toggle();
								click();
							}}
						>
							{label}
						</Button>
					</Div>
				</ArrowContainer>
			)}
		>
			<Button
				id={id ? id : null}
				onClick={show_popover ? toggle : click}
				className={[
					...castArray(className),
					"button-icon",
					is_open ? "is_open" : null
				]}
			>
				{isString(icon) ? <Icon icon={icon as keyof Icons} /> : icon}
			</Button>
		</Popover>
	);
};
