import { __ } from "@wordpress/i18n";

import "./Navigation.styl";
import { Div, Span } from "utils/Components";
import { ButtonAdd } from "./ButtonAdd";

export const Navigation: React.ComponentType = props => {
	return (
		<Div id="navigation-index" className="navigation">
			<Span id="navigation-title">{__("Typographies")}</Span>
			<ButtonAdd />
		</Div>
	);
};
