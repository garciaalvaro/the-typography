import { __ } from "@wordpress/i18n";

import { Span } from "utils/Components";
import { useGroupStyle } from "hooks";

type Props = SelectorGroup & {
	toggle: Function;
};

export const PreviewTitle: React.ComponentType<Props> = props => {
	const { id, custom_title, title, toggle } = props;
	const style = useGroupStyle(id);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { lineHeight, ...style_without_lineHeight } = style;

	return (
		<Span
			style={style_without_lineHeight}
			onClick={toggle}
			className="preview-title"
		>
			{custom_title && title ? title : __("Sample text")}
		</Span>
	);
};
