import { Fragment } from "@wordpress/element";

import { useSetProp } from "hooks/useSetProp";
import { Span } from "utils/Components/Span";

type Props = {
	prop_key: keyof SelectorGroup | keyof Typography;
	prop_value: boolean;
	label: string;
	children?: React.ReactNode;
	group_id?: SelectorGroup["id"];
};

export const ControlTextToggle: React.ComponentType<Props> = props => {
	const { prop_key, prop_value, label, children, group_id } = props;
	const setValue = useSetProp(group_id);

	return (
		<Fragment>
			<Span
				className={[
					"control-text_toggle",
					prop_value ? "enabled" : "disabled"
				]}
				onClick={() => setValue(prop_key, !prop_value)}
			>
				{label}
			</Span>

			{prop_value && children}
		</Fragment>
	);
};
