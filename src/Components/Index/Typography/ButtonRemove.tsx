import apiFetch from "@wordpress/api-fetch";
import { __ } from "@wordpress/i18n";
import { useDispatch } from "@wordpress/data";

import { ButtonPopover } from "utils/Components";
import { store_slug } from "utils/data";

type Props = {
	id: Typography["id"];
};

export const ButtonRemove: React.ComponentType<Props> = props => {
	const { id } = props;
	const { removeTypography } = useDispatch(store_slug);

	return (
		<ButtonPopover
			icon="delete"
			label={__("Remove Typography")}
			className="button-remove_typography"
			click={() => {
				removeTypography(id);

				apiFetch({
					parse: true,
					path: `/wp/v2/the_typography/${id}`,
					method: "DELETE",
					data: { force: true }
				});
			}}
		/>
	);
};
