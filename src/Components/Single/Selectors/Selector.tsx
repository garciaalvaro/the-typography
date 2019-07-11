import { useState } from "@wordpress/element";

import { Div } from "utils/Components";
import { ButtonRemove } from "./ButtonRemove";
import { SelectorType } from "./SelectorType";
import { SelectorText } from "./SelectorText";
import { SelectorBlock } from "./SelectorBlock";

interface Props extends Selector {
	is_new: boolean;
	group_id: SelectorGroup["id"];
}

export const Selector: React.ComponentType<Props> = props => {
	const { block_name, is_new, group_id, id } = props;
	const classes = ["selector", is_new ? "is_new" : null];
	const [type, setType] = useState<"text" | "block">(
		block_name ? "block" : "text"
	);

	return (
		<Div className={classes}>
			<ButtonRemove selector_id={id} group_id={group_id} />
			<SelectorType
				{...props}
				group_id={group_id}
				type={type}
				setType={setType}
			/>

			{type === "text" ? (
				<SelectorText {...props} is_new={is_new} group_id={group_id} />
			) : (
				<SelectorBlock {...props} group_id={group_id} />
			)}
		</Div>
	);
};
