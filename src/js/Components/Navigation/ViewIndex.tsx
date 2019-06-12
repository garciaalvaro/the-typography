import l, { Span } from "utils";
import ButtonAdd from "./ButtonAdd";
import ButtonInfo from "./ButtonInfo";

const { __ } = wp.i18n;
const { Fragment } = wp.element;

const ViewIndex: React.ComponentType = () => {
	return (
		<Fragment>
			<Span id="navigation-title">{__("Typographies")}</Span>
			<ButtonInfo />
			<ButtonAdd />
		</Fragment>
	);
};

export default ViewIndex;
