import l from "utils";
import Title from "./Title";
import Typography from "./Typography";
import ParentSelector from "./ParentSelector";
import ForceStyles from "./ForceStyles";
import Selectors from "./Selectors";

interface Parent extends SelectorGroup {
	updateProp: FunctionVoid;
	new_selector_added: boolean;
}
type Props = Parent;

const { Fragment } = wp.element;

const SelectorGroupEdit: React.ComponentType<Props> = props => {
	return (
		<Fragment>
			<Title {...props} />
			<Typography {...props} />
			<ForceStyles {...props} />
			<ParentSelector {...props} />
			<Selectors {...props} />
		</Fragment>
	);
};

export default SelectorGroupEdit;
