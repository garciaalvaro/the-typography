import { BlockIcon } from "@wordpress/block-editor";

import { Div } from "utils/Components/Div";
import { Span } from "utils/Components/Span";
import { Icon } from "utils/Components/Icon";

interface Props {
	label: string;
	icon?: string | React.ReactNode;
	extra_props?: Object;
	children?: React.ReactNode;
}

export const BlockOption: React.ComponentType<Props> = props => {
	let { icon, label, extra_props, children } = props;

	extra_props = extra_props || {};

	return (
		<Div {...extra_props} className="block">
			<Div className="icon">
				{icon ? <BlockIcon icon={icon} /> : <Icon icon="error" />}
			</Div>
			<Span className="label">{label}</Span>
			{children && children}
		</Div>
	);
};
