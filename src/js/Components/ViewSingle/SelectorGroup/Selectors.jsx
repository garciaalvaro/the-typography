import l, { is_customizer, Div, Span } from "utils";
import Selector from "../Selector/Selector";
import ButtonAddSelector from "./ButtonAddSelector";

const { __ } = wp.i18n;

const Selectors = props => {
	const { selectors, id: parent_id } = props;

	return (
		<Div classes={["selector_group-content", "selector_group-selectors"]}>
			{is_customizer && (
				<Span classes={["message", "message-go_to_editor"]}>
					{__("Selecting custom blocks can be done from any Post editor.")}
				</Span>
			)}
			<ButtonAddSelector parent_id={parent_id} />
			{selectors.map(selector => (
				<Selector key={selector.id} {...selector} parent_id={parent_id} />
			))}
		</Div>
	);
};

export default Selectors;
