import { __ } from "@wordpress/i18n";

import { Button } from "utils/Components";
import { useUpdateTypography } from "hooks";

interface Props {
	setUpdateCounter: Function;
}

export const ButtonSave: React.ComponentType<Props> = props => {
	const { setUpdateCounter } = props;
	const updateTypography = useUpdateTypography();

	return (
		<Button
			id="button-save_typography"
			className={["button-text", "button-navigation"]}
			onClick={() => {
				updateTypography();
				setUpdateCounter((counter: number) => counter + 1);
			}}
		>
			{__("Save")}
		</Button>
	);
};
