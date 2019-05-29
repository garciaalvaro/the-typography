import l, { is_customizer, Div, Span } from "utils";
import Selector from "../Selector/Selector";
import ButtonAddSelector from "./ButtonAddSelector";

const { __ } = wp.i18n;

const Selectors = props => {
	const { selectors, id: parent_id, new_selector_added } = props;

	return (
		<Div classes={["selector_group-content", "selector_group-selectors"]}>
			{is_customizer && (
				<Span classes={["message", "message-go_to_editor"]}>
					{__("Selecting custom blocks can be done from any Post editor.")}
				</Span>
			)}
			<ButtonAddSelector parent_id={parent_id} />
			{selectors.map((selector, index) => {
				const is_new = new_selector_added && index === 0;

				return (
					<Selector
						key={selector.id}
						{...selector}
						is_new={is_new}
						parent_id={parent_id}
					/>
				);
			})}
		</Div>
	);
};

export default Selectors;
