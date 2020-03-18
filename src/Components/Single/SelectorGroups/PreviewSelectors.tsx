import { noop } from "lodash";
import { __ } from "@wordpress/i18n";
import { Fragment } from "@wordpress/element";

import { Div, Span } from "utils/Components";
import { PreviewSelectorText } from "./PreviewSelectorText";
import { PreviewSelectorBlock } from "./PreviewSelectorBlock";

type Props = SelectorGroup & {
	onClick?: Function;
};

export const PreviewSelectors: React.ComponentType<Props> = props => {
	const {
		selectors,
		custom_parent_selector,
		parent_selector,
		onClick
	} = props;

	return (
		<Div className="preview-selectors" onClick={onClick || noop}>
			{!selectors.length ? (
				<Span>{__("...no selectors, add one")}</Span>
			) : (
				<Fragment>
					{custom_parent_selector && (
						<Span className="selector-parent">
							{parent_selector
								? parent_selector
								: __("...enter a parent selector")}
						</Span>
					)}

					{selectors.map(selector => {
						const { block_name } = selector;
						const selector_type = !block_name ? "text" : "block";

						if (selector_type === "text") {
							return (
								<PreviewSelectorText
									key={selector.id}
									{...selector}
								/>
							);
						}

						return (
							<PreviewSelectorBlock
								key={selector.id}
								{...selector}
							/>
						);
					})}
				</Fragment>
			)}
		</Div>
	);
};
