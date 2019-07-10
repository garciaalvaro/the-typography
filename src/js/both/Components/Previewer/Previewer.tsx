import l from "src/js/both/utils";
import PageData from "./PageData";
import Styles from "./Styles";

const { Fragment } = wp.element;

const Previewer: React.ComponentType = () => {
	return (
		<Fragment>
			<PageData />
			<Styles />
		</Fragment>
	);
};

export default Previewer;
