import l, { addPrefix, icons, pr_store } from "utils";

interface withDispatch {
	goToInsert: FunctionVoid;
}
type Props = withDispatch;

const { withDispatch } = wp.data;
const { Button, Icon } = wp.components;

const ButtonInsert: React.ComponentType<Props> = props => {
	const { goToInsert } = props;

	return (
		<Button
			id={addPrefix("button-open_insert")}
			className={addPrefix("navigation-button")}
			onClick={goToInsert}
		>
			<Icon icon={icons.notifications} />
		</Button>
	);
};

export default withDispatch<withDispatch>(dispatch => {
	const { goToInsert } = dispatch(pr_store);

	return { goToInsert };
})(ButtonInsert);
