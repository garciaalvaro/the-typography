import { BlockIcon } from "@wordpress/block-editor";

import { Div } from "utils/Components/Div";
import { Span } from "utils/Components/Span";
import { Icon } from "utils/Components/Icon";

type Props = {
	label: string;
	icon?: string | React.ReactNode;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	extra_props?: Record<string, any>;
	children?: React.ReactNode;
};

export const BlockOption: React.ComponentType<Props> = props => {
	let { extra_props } = props;
	const { icon, label, children } = props;

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
