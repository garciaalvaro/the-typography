import l from "src/js/both/utils";

interface withState extends setState<withState> {
	is_open: boolean;
}

const { withState, compose } = wp.compose;

const withToggle = <P extends {}>(
	Component: React.ComponentType<P>
): React.ComponentType<P & withState> => props => {
	const { setState, is_open } = props;

	const open = () => setState({ is_open: true });
	const close = () => setState({ is_open: false });
	const toggle = () => setState({ is_open: !is_open });

	return <Component {...props} close={close} open={open} toggle={toggle} />;
};

export default compose([withState({ is_open: false }), withToggle]);
