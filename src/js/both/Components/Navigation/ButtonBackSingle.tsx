import l, { addPrefix, pr_store, icons, withToggle } from "src/js/both/utils";
import Popover, { ArrowContainer } from "react-tiny-popover";

interface withDispatch {
	goToIndex: FunctionVoid;
}
interface Parent {
	single_changed: boolean;
}
type Props = withToggle & withDispatch & Parent;

const { __ } = wp.i18n;
const { Icon, Button, MenuGroup, MenuItem } = wp.components;
const { compose } = wp.compose;
const { withDispatch } = wp.data;

const ButtonBack: React.ComponentType<Props> = props => {
	const { single_changed, goToIndex, is_open, toggle, close } = props;

	return (
		<Popover
			isOpen={single_changed && is_open}
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
						<MenuItem onClick={goToIndex}>
							{__("Discard changes and go back")}
						</MenuItem>
					</MenuGroup>
				</ArrowContainer>
			)}
		>
			<Button
				id={addPrefix("button-go_back")}
				className={addPrefix("navigation-button")}
				onClick={() => {
					if (!single_changed) {
						goToIndex();
					}
					toggle();
				}}
			>
				<Icon icon={icons.back} />
			</Button>
		</Popover>
	);
};

export default compose([
	withToggle,
	withDispatch<withDispatch, Parent>(dispatch => {
		const { goToIndex, emptySingle } = dispatch(pr_store);

		return {
			goToIndex: () => {
				goToIndex();
				emptySingle();
			}
		};
	})
])(ButtonBack);
