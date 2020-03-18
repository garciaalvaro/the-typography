import { Div } from "utils/Components";
import { useToggle } from "utils/hooks";
import { useGroupColorScheme, useIsPredefinedSingle } from "hooks";
import { EditSelectorGroup } from "./EditSelectorGroup";
import { PreviewSelectors } from "./PreviewSelectors";
import { PreviewHeader } from "./PreviewHeader";

type Props = SelectorGroup & {
	is_new: boolean;
};

export const SelectorGroup: React.ComponentType<Props> = props => {
	const { id, is_new } = props;
	const color_scheme = useGroupColorScheme(id);
	const is_predefined = useIsPredefinedSingle();
	const { is_open, toggle } = useToggle();

	return (
		<Div
			className={[
				"selector_group",
				`color_scheme-type-${color_scheme}`,
				is_predefined ? "is_predefined" : null,
				is_open ? "is_open" : "is_closed",
				is_new ? "is_new" : null
			]}
		>
			<PreviewHeader {...props} toggle={toggle} is_open={is_open} />

			{is_open ? (
				<EditSelectorGroup {...props} />
			) : (
				<PreviewSelectors
					{...props}
					onClick={is_open ? undefined : toggle}
				/>
			)}
		</Div>
	);
};
