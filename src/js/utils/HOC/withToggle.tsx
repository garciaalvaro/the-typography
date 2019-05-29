import l from "utils";

const { withState, compose } = wp.compose;

const withToggle = WrappedComponent => props => {
	const { setState, is_open } = props;

	const open = () => setState({ is_open: true });
	const close = () => setState({ is_open: false });
	const toggle = () => setState({ is_open: !is_open });

	return (
		<WrappedComponent {...props} close={close} open={open} toggle={toggle} />
	);
};

export default compose([withState({ is_open: false }), withToggle]);
