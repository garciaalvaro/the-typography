import l, { withToggle, addPrefix, pr_store, icons } from "../../../utils";
import Popover, { ArrowContainer } from "react-tiny-popover";

const { __ } = wp.i18n;
const { Icon, Button, MenuGroup, MenuItem } = wp.components;
const { compose } = wp.compose;
const { withDispatch } = wp.data;

const ButtonRemove = props => {
	const { removeSelector, is_open, toggle, close } = props;

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
					<MenuGroup>
						<MenuItem onClick={removeSelector}>{__("Remove group")}</MenuItem>
					</MenuGroup>
				</ArrowContainer>
			)}
		>
			<Button
				onClick={toggle}
				className={addPrefix("button-remove_selector_group")}
			>
				<Icon icon={icons.delete} />
			</Button>
		</Popover>
	);
};

export default compose([
	withToggle,
	withDispatch((dispatch, { close, id }) => {
		const { removeSelectorGroup, updateChanged } = dispatch(pr_store);

		return {
			removeSelector: () => {
				close();
				removeSelectorGroup(id);
				updateChanged(true);
			}
		};
	})
])(ButtonRemove);
