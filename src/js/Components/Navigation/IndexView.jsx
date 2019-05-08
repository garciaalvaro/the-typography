import l, { Span } from "../../utils";
import ButtonAdd from "./ButtonAdd";

const { __ } = wp.i18n;
const { Fragment } = wp.element;

const IndexView = () => {
	return (
		<Fragment>
			<Span id="navigation-title">{__("Typographies")}</Span>
			<ButtonAdd />
		</Fragment>
	);
};

export default IndexView;
