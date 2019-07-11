import { __, sprintf } from "@wordpress/i18n";
import { useEffect, useState } from "@wordpress/element";

import "./TypographyVisibility.styl";
import { Div, Icon } from "utils/Components";
import { is_pro } from "utils/data";

interface Props {
	is_active: Typography["is_active"];
	is_visible: Typography["is_visible"];
}

export const TypographyVisibility: React.ComponentType<Props> = props => {
	const { is_visible } = props;
	const is_active = !is_pro || props.is_active;
	const [visibility_label, setVisibilityLabel] = useState("");

	useEffect(() => {
		if (is_visible && is_active) {
			setVisibilityLabel(__("Active in the current preview window"));
		} else {
			setVisibilityLabel(
				sprintf(
					__("Not active in the current preview window (%s%s%s)"),
					!is_visible ? __(`the "context" is different`) : "",
					!is_visible && is_pro && !is_active ? __(" & ") : "",
					is_pro && !is_active ? __("the typography is deactivated") : ""
				)
			);
		}
	}, [is_visible, is_active]);

	return (
		<Div className="typography-visibility">
			<Div
				className={[
					"typography-visibility-icon",
					is_visible && is_active ? "is_visible" : "no-is_visible"
				]}
			>
				<Icon icon="visibility" />
			</Div>
			<Div className={["typography-visibility-message"]}>
				{visibility_label}
			</Div>
		</Div>
	);
};
