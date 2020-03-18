import { __ } from "@wordpress/i18n";
import { Fragment } from "@wordpress/element";

import { Div, ControlTextToggle } from "utils/Components";
import { FontFamily } from "./FontFamily";
import { FontVariant } from "./FontVariant";

type Props = {
	custom_font: Typography["custom_font"];
	font_family: Typography["font_family"];
	font_variant: Typography["font_variant"];
};

export const Font: React.ComponentType<Props> = props => {
	const { custom_font, font_family, font_variant } = props;

	return (
		<Div className={["control-container", "control-container-font"]}>
			<ControlTextToggle
				prop_key="custom_font"
				prop_value={custom_font}
				label={__("font")}
			>
				<Fragment>
					<FontFamily font_family={font_family} />

					{font_family && (
						<FontVariant
							font_family={font_family}
							font_variant={font_variant}
						/>
					)}
				</Fragment>
			</ControlTextToggle>
		</Div>
	);
};
