import addPrefix from "./addPrefix";

interface Props extends Object {
	children?: React.ReactNode;
	id?: string | null;
	classes?: string | (string | null)[];
}
interface HTMLProps extends Props {
	html_tag: string;
}

const DivForwardRef: React.ForwardRefExoticComponent<
	Props
> = wp.element.forwardRef((props_raw, ref) => {
	const { children, id, classes = [], html_tag, ...rest } = props_raw;

	const props = {
		id: id ? addPrefix(id) : undefined,
		className: classes && classes.length ? addPrefix(classes) : undefined,
		...rest
	};

	return (
		// @ts-ignore
		<div {...props} ref={ref}>
			{children}
		</div>
	);
});

const Div: React.ComponentType<Props> = props => (
	<HTML {...props} html_tag="div" />
);
const Span: React.ComponentType<Props> = props => (
	<HTML {...props} html_tag="span" />
);

const HTML: React.ComponentType<HTMLProps> = props_raw => {
	const { children, id, classes = [], html_tag, ...rest } = props_raw;

	const props = {
		id: id ? addPrefix(id) : undefined,
		className: classes && classes.length ? addPrefix(classes) : undefined,
		...rest
	};

	switch (html_tag) {
		case "div":
			return <div {...props}>{children}</div>;
			break;

		case "span":
			return <span {...props}>{children}</span>;
			break;

		default:
			return null;
			break;
	}
};

export { DivForwardRef, Div, Span };
