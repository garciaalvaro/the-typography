import l, { Span } from "utils";
import ButtonAdd from "./ButtonAdd";
import ButtonInsert from "./ButtonInsert";

const { __ } = wp.i18n;
const { Fragment } = wp.element;

const ViewIndex: React.ComponentType = () => {
	return (
		<Fragment>
			<Span id="navigation-title">{__("Typographies")}</Span>
			<ButtonInsert />
			<ButtonAdd />
		</Fragment>
	);
};

export default ViewIndex;
