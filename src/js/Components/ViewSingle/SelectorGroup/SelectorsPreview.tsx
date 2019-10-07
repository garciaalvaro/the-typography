import l, { Div } from "utils";
import BlockSelectorPreview from "./BlockSelectorPreview";

interface Parent extends SelectorGroup {
	updateProp: FunctionVoid;
	new_selector_added: boolean;
}
type Props = Parent & Partial<withToggle>;

const { noop } = lodash;
const { __ } = wp.i18n;
const { Fragment } = wp.element;

const SelectorsPreview: React.ComponentType<Props> = props => {
	const {
		open,
		selectors,
		custom_parent_selector,
		parent_selector,
		id
	} = props;

	return (
		<Div
			classes="selector_group-selectors"
			onClick={() => {
				open ? open() : noop;
			}}
		>
			{!selectors.length ? (
				<Div classes="selector-text">{__("...no selectors, add one")}</Div>
			) : (
				<Fragment>
					{custom_parent_selector && (
						<Div classes={["selector-text", "selector-parent"]}>
							{parent_selector !== ""
								? parent_selector
								: __("...enter a parent selector")}
						</Div>
					)}
					{selectors.map(selector => {
						const { selector_type, text_selector } = selector;

						if (selector_type === "text") {
							return (
								<Div key={selector.id} classes="selector-text">
									{text_selector === ""
										? __("...enter a selector")
										: text_selector}
								</Div>
							);
						}

						return (
							<BlockSelectorPreview
								key={selector.id}
								{...selector}
								parent_id={id}
							/>
						);
					})}
				</Fragment>
			)}
		</Div>
	);
};

export default SelectorsPreview;
