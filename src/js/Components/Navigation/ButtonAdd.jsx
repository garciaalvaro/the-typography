import l, { pr, icons, withAddTypography } from "../../utils";

const { Button, Icon } = wp.components;

const ButtonAdd = props => {
	const { addTypography } = props;

	return (
		<Button
			id={`${pr}-button-add_typography`}
			className={`${pr}-navigation-button`}
			onClick={addTypography}
		>
			<Icon icon={icons.add_box} />
		</Button>
	);
};

export default withAddTypography(ButtonAdd);
