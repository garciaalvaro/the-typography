import l, { addPrefix, icons, pr_store } from "src/js/both/utils";

interface withDispatch {
	goToInfo: FunctionVoid;
}
type Props = withDispatch;

const { withDispatch } = wp.data;
const { Button, Icon } = wp.components;

const ButtonInfo: React.ComponentType<Props> = props => {
	const { goToInfo } = props;

	return (
		<Button
			id={addPrefix("button-open_info")}
			className={addPrefix("navigation-button")}
			onClick={goToInfo}
		>
			<Icon icon={icons.info} />
		</Button>
	);
};

export default withDispatch<withDispatch>(dispatch => {
	const { goToInfo } = dispatch(pr_store);

	return { goToInfo };
})(ButtonInfo);
