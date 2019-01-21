import l, { Div, generateClassName } from "../index";

const withContainer = classes => WrappedComponent => props => (
	<Div className={generateClassName(classes)}>
		<WrappedComponent {...props} />
	</Div>
);

export default withContainer;
