import l, { Div } from "../index";

const withContainer = classes => WrappedComponent => props => (
	<Div classes={classes}>
		<WrappedComponent {...props} />
	</Div>
);

export default withContainer;
