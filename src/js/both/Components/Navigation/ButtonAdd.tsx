import l, { addPrefix, icons, withAddTypography } from "src/js/both/utils";

type Props = withAddTypography;

const { Button, Icon } = wp.components;

const ButtonAdd: React.ComponentType<Props> = props => {
	const { addTypography } = props;

	return (
		<Button
			id={addPrefix("button-add_typography")}
			className={addPrefix("navigation-button")}
			onClick={addTypography}
		>
			<Icon icon={icons.add_box} />
		</Button>
	);
};

export default withAddTypography(ButtonAdd);
