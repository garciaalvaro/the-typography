const { forwardRef } = wp.element;

const DivForwardRef = forwardRef(({ children, ...rest }, ref) => (
	<div {...rest} ref={ref}>
		{children}
	</div>
));

const Div = ({ children, ...rest }) => <div {...rest}>{children}</div>;
const Span = ({ children, ...rest }) => <span {...rest}>{children}</span>;

export { DivForwardRef, Div, Span };
