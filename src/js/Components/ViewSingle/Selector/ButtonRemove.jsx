import l, { withToggle, pr, pr_store, icons } from "../../../utils";
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
						<MenuItem onClick={removeSelector}>
							{__("Remove selector")}
						</MenuItem>
					</MenuGroup>
				</ArrowContainer>
			)}
		>
			<Button onClick={toggle} className={`${pr}-button-remove_selector`}>
				<Icon icon={icons.remove_circle} />
			</Button>
		</Popover>
	);
};

export default compose([
	withToggle,
	withDispatch((dispatch, { close, id, parent_id }) => {
		const { removeSelector, updateChanged } = dispatch(pr_store);

		return {
			removeSelector: () => {
				close();
				removeSelector(id, parent_id);
				updateChanged(true);
			}
		};
	})
])(ButtonRemove);
