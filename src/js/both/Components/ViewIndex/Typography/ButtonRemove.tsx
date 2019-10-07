import l, { withToggle, pr_store, icons, addPrefix } from "src/js/both/utils";
import Popover, { ArrowContainer } from "react-tiny-popover";

interface withDispatch {
	removeTypography: FunctionVoid;
}
interface Parent {
	id: number;
}
type Props = withToggle & withDispatch & Parent;

const { __ } = wp.i18n;
const { Icon, Button, MenuGroup, MenuItem } = wp.components;
const { compose } = wp.compose;
const { withDispatch } = wp.data;
const { apiFetch } = wp;

const ButtonRemove: React.ComponentType<Props> = props => {
	const { is_open, toggle, close, removeTypography } = props;

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
						<MenuItem onClick={removeTypography}>
							{__("Remove Typography")}
						</MenuItem>
					</MenuGroup>
				</ArrowContainer>
			)}
		>
			<Button
				onClick={toggle}
				className={addPrefix([
					"button-remove_typography",
					is_open ? "is_open" : null
				])}
			>
				<Icon icon={icons.delete} />
			</Button>
		</Popover>
	);
};

export default compose([
	withToggle,
	withDispatch<withDispatch, Parent>((dispatch, { id }) => {
		const { removeTypography } = dispatch(pr_store);

		return {
			removeTypography: () => {
				apiFetch({
					parse: true,
					path: `/wp/v2/the_typography/${id}`,
					method: "DELETE",
					data: { force: true }
				}).then(_ => removeTypography(id));
			}
		};
	})
])(ButtonRemove);
