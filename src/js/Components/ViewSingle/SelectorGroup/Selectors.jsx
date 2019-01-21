import l, { Div, pr } from "../../../utils";
import Selector from "../Selector/Selector";
import ButtonAddSelector from "./ButtonAddSelector";

const Selectors = props => {
	const { selectors, id: parent_id } = props;

	return (
		<Div
			className={`${pr}-selector_group-content ${pr}-selector_group-selectors`}
		>
			<ButtonAddSelector parent_id={parent_id} />
			{selectors.map(selector => (
				<Selector key={selector.id} {...selector} parent_id={parent_id} />
			))}
		</Div>
	);
};

export default Selectors;
