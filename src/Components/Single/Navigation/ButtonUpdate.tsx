import { __ } from "@wordpress/i18n";

import { Button } from "utils/Components";
import { useUpdateTypography } from "hooks";

interface Props {
	setUpdateCounter: Function;
}

export const ButtonUpdate: React.ComponentType<Props> = props => {
	const { setUpdateCounter } = props;
	const updateTypography = useUpdateTypography();

	return (
		<Button
			id="button-update_typography"
			className={["button-text", "button-navigation"]}
			onClick={() => {
				updateTypography();
				setUpdateCounter((counter: number) => counter + 1);
			}}
		>
			{__("Update")}
		</Button>
	);
};
