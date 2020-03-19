import { __ } from "@wordpress/i18n";

import "./Selectors.styl";
import { Div, Span } from "utils/Components";
import { is_customizer } from "utils/data";
import { Selector } from "./Selector";
import { ButtonAdd } from "./ButtonAdd";
import { useNewElementJustAdded } from "hooks";

type Props = {
	selectors: Selector[];
	group_id: SelectorGroup["id"];
};

export const Selectors: React.ComponentType<Props> = props => {
	const { selectors, group_id } = props;
	const new_element_just_added = useNewElementJustAdded(selectors);

	return (
		<Div className="edit-selectors">
			{is_customizer && (
				<Span className={["single-message", "message-go_to_editor"]}>
					{__(
						"Selecting custom blocks can be done from any Post editor."
					)}
				</Span>
			)}

			<ButtonAdd
				group_id={group_id}
				new_element_just_added={new_element_just_added}
			/>

			{selectors.map((selector, index) => (
				<Selector
					key={selector.id}
					{...selector}
					is_new={new_element_just_added && index === 0}
					group_id={group_id}
				/>
			))}
		</Div>
	);
};
