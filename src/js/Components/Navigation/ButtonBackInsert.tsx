import l, { addPrefix, pr_store, icons } from "utils";

interface withDispatch {
	goToIndex: FunctionVoid;
}
type Props = withDispatch;

const { Icon, Button } = wp.components;
const { withDispatch } = wp.data;

const ButtonBackInsert: React.ComponentType<Props> = props => {
	const { goToIndex } = props;

	return (
		<Button
			id={addPrefix("go_back")}
			className={addPrefix("navigation-button")}
			onClick={goToIndex}
		>
			<Icon icon={icons.back} />
		</Button>
	);
};

export default withDispatch<withDispatch>(dispatch => {
	const { goToIndex } = dispatch(pr_store);

	return { goToIndex };
})(ButtonBackInsert);
