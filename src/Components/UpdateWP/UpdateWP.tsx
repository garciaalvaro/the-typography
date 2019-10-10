import { Div, Span } from "utils/Components";
import { __ } from "@wordpress/i18n";

export const UpdateWP: React.ComponentType = props => {
	return (
		<Div id="container" className="color_scheme-type-light">
			<Div id="content-index" className="content">
				<Div id="message-no_results" className="index-message">
					<Span>
						{__(
							"To use the plugin please update WordPress to the latest version or install the Gutenberg plugin."
						)}
					</Span>
				</Div>
			</Div>
		</Div>
	);
};
