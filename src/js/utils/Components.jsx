import l, { addPrefix } from ".";

const DivForwardRef = wp.element.forwardRef(
	({ children, classes, id, ...rest }, ref) => (
		<div {...rest} id={addPrefix(id)} className={addPrefix(classes)} ref={ref}>
			{children}
		</div>
	)
);
const Div = ({ children, classes, id, ...rest }) => (
	<div {...rest} id={addPrefix(id)} className={addPrefix(classes)}>
		{children}
	</div>
);
const Span = ({ children, classes, id, ...rest }) => (
	<span {...rest} id={addPrefix(id)} className={addPrefix(classes)}>
		{children}
	</span>
);

export { DivForwardRef, Div, Span };
