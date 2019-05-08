import l, { Div, pr } from "../../../utils";
import BlockSelectorPreview from "./BlockSelectorPreview";
import { Fragment } from "react";

const { __ } = wp.i18n;

const SelectorsPreview = props => {
	const { open, selectors, custom_parent_selector, parent_selector } = props;

	return (
		<Div className={`${pr}-selector_group-selectors`} onClick={open}>
			{selectors.length === 0 ? (
				<Div classes="selector-text">{__("...no selectors")}</Div>
			) : (
				<Fragment>
					{custom_parent_selector && (
						<Div className={`${pr}-selector-text ${pr}-selector-parent`}>
							{parent_selector !== ""
								? parent_selector
								: __("...enter a parent selector")}
						</Div>
					)}
					{selectors.map(selector => {
						const { selector_type, text_selector } = selector;

						if (selector_type === "text") {
							return (
								<Div key={selector.id} className={`${pr}-selector-text`}>
									{text_selector === ""
										? __("...enter a selector")
										: text_selector}
								</Div>
							);
						}

						return <BlockSelectorPreview key={selector.id} {...selector} />;
					})}
				</Fragment>
			)}
		</Div>
	);
};

export default SelectorsPreview;
