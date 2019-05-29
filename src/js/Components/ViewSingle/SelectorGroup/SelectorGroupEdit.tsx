import l from "utils";
import Title from "./Title";
import Typography from "./Typography";
import ParentSelector from "./ParentSelector";
import ForceStyles from "./ForceStyles";
import Selectors from "./Selectors";

const { Fragment } = wp.element;

const SelectorGroupEdit = props => {
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
