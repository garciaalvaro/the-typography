import l, { withToggle, addPrefix, pr_store, icons } from "src/js/both/utils";
import Popover, { ArrowContainer } from "react-tiny-popover";

interface withDispatch {
	reset: FunctionVoid;
}
interface Parent {
	_typography_style_defaults: TypographyStyle | TypographyStyleWithFont;
	selector_group_id?: string;
}
type Props = withDispatch & Parent & withToggle;

const { __ } = wp.i18n;
const { Icon, Button, MenuGroup, MenuItem } = wp.components;
const { compose } = wp.compose;
const { withDispatch } = wp.data;

const ButtonResetDefaults: React.ComponentType<Props> = props => {
	const { reset, is_open, toggle, close } = props;

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
					<MenuGroup label="">
						<MenuItem onClick={reset}>{__("Reset defaults")}</MenuItem>
					</MenuGroup>
				</ArrowContainer>
			)}
		>
			<Button onClick={toggle} className={addPrefix("button-reset_defaults")}>
				<Icon icon={icons.reset} />
			</Button>
		</Popover>
	);
};

export default compose([
	withToggle,
	withDispatch<withDispatch, Parent & withToggle>(
		(dispatch, { close, _typography_style_defaults, selector_group_id }) => {
			const { resetProps, resetSelectorGroupProps, updateChanged } = dispatch(
				pr_store
			);

			return {
				reset: () => {
					close();

					if (selector_group_id) {
						resetSelectorGroupProps(
							_typography_style_defaults,
							selector_group_id
						);
					} else {
						resetProps(_typography_style_defaults);
					}

					updateChanged(true);
				}
			};
		}
	)
])(ButtonResetDefaults);
