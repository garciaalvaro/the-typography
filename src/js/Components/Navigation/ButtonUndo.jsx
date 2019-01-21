import l, { pr, pr_store } from "../../utils";

const { __ } = wp.i18n;
const { Button } = wp.components;
const { withDispatch } = wp.data;

const ButtonUndo = props => {
	const { undo, setState } = props;

	return (
		<Button
			id={`${pr}-button-undo_single`}
			className={`${pr}-navigation-button`}
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

export default withDispatch(dispatch => {
	const { resetSingle, updateChanged } = dispatch(pr_store);

	return {
		undo: () => {
			resetSingle();
			updateChanged(false);
		}
	};
})(ButtonUndo);
