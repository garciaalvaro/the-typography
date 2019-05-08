import l, { Div } from "utils";

const withContainer = classes => WrappedComponent => props => (
	<Div classes={classes}>
		<WrappedComponent {...props} />
	</Div>
);

export default withContainer;
