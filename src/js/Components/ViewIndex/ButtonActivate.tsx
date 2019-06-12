import l, { withToggle, pr_store, icons, addPrefix } from "utils";
import Popover, { ArrowContainer } from "react-tiny-popover";

interface withDispatch {
	activateTypography: FunctionVoid;
	deactivateTypography: FunctionVoid;
}
interface Parent {
	id: number;
	is_active: boolean;
}
type Props = withToggle & withDispatch & Parent;

const { __ } = wp.i18n;
const { Icon, Button, MenuGroup, MenuItem } = wp.components;
const { compose } = wp.compose;
const { withDispatch } = wp.data;

const ButtonActivate: React.ComponentType<Props> = props => {
	const {
		is_open,
		toggle,
		close,
		is_active,
		deactivateTypography,
		activateTypography
	} = props;
	const toggleTypography = () => {
		close();

		if (is_active) {
			deactivateTypography();
		} else {
			activateTypography();
		}
	};

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
						<MenuItem onClick={toggleTypography}>
							{is_active ? __("Deactivate") : __("Activate")}
						</MenuItem>
					</MenuGroup>
				</ArrowContainer>
			)}
		>
			<Button
				onClick={toggle}
				className={addPrefix([
					"button-visibility_typography",
					is_open ? "is_open" : null
				])}
			>
				<Icon icon={is_active ? icons.visibility : icons.visibility_off} />
			</Button>
		</Popover>
	);
};

export default compose([
	withToggle,
	withDispatch<withDispatch, Parent>((dispatch, { id }) => {
		const { activateTypography, deactivateTypography } = dispatch(pr_store);
		const { saveEntityRecord } = dispatch("core");

		return {
			activateTypography: () => {
				activateTypography(id);

				saveEntityRecord("postType", "the_typography", {
					id,
					meta: { is_active: true }
				});
			},
			deactivateTypography: () => {
				deactivateTypography(id);

				saveEntityRecord("postType", "the_typography", {
					id,
					meta: { is_active: false }
				});
			}
		};
	})
])(ButtonActivate);
