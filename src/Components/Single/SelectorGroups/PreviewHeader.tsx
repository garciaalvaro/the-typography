import { Fragment } from "@wordpress/element";

import { Div, Button, Icon, Span } from "utils/Components";
import { ButtonRemove } from "./ButtonRemove";
import { PreviewTitle } from "./PreviewTitle";
import { useIsPredefinedSingle } from "hooks";

interface Props extends SelectorGroup {
	is_open: boolean;
	toggle: Function;
}

export const PreviewHeader: React.ComponentType<Props> = props => {
	const { id, is_open, toggle, _description } = props;
	const is_predefined = useIsPredefinedSingle();

	return (
		<Fragment>
			<Div className="preview-header">
				<PreviewTitle {...props} toggle={toggle} />

				{!is_predefined && <ButtonRemove id={id} />}

				<Button
					onClick={toggle}
					className={["button-toggle_selector_group", "button-icon"]}
				>
					<Icon icon={is_open ? "collapse" : "expand"} />
				</Button>
			</Div>

			{_description && (
				<Span className="description" onClick={toggle}>
					{_description}
				</Span>
			)}
		</Fragment>
	);
};
