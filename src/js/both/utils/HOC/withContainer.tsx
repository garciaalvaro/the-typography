import l, { Div } from "src/js/both/utils";

const withContainer = (classes: (string | null)[]) => <P extends {}>(
	Component: React.ComponentType<P>
): React.ComponentType<P> => props => (
	<Div classes={classes}>
		<Component {...props} />
	</Div>
);

export default withContainer;
