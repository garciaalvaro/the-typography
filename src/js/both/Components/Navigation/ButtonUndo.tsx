import l, { addPrefix, pr_store } from "src/js/both/utils";

interface withDispatch {
	undo: FunctionVoid;
}
interface Parent {
	setState: FunctionVoid;
}
type Props = withDispatch & Parent;

const { __ } = wp.i18n;
const { Button } = wp.components;
const { withDispatch } = wp.data;

const ButtonUndo: React.ComponentType<Props> = props => {
	const { undo, setState } = props;

	return (
		<Button
			id={addPrefix("button-undo_single")}
			className={addPrefix("navigation-button")}
			onClick={() => {
				setState({ just_undoed: true });
				undo();
				setState({ just_undoed: false });
			}}
		>
			{__("Undo")}
		</Button>
	);
};

export default withDispatch<withDispatch, Parent>(dispatch => {
	const { resetSingle, updateChanged } = dispatch(pr_store);

	return {
		undo: () => {
			resetSingle();
			updateChanged(false);
		}
	};
})(ButtonUndo);
