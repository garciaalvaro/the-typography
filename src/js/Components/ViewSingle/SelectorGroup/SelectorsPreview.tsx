import l, { Div } from "utils";
import BlockSelectorPreview from "./BlockSelectorPreview";

interface Parent extends SelectorGroup {
	updateProp: FunctionVoid;
	new_selector_added: boolean;
	is_edit: boolean;
}
type Props = Parent & Partial<withToggle>;

const { noop } = lodash;
const { __ } = wp.i18n;
const { Fragment } = wp.element;

const SelectorsPreview: React.ComponentType<Props> = props => {
	let {
		open,
		selectors,
		custom_parent_selector,
		parent_selector,
		is_edit
	} = props;
	selectors = is_edit
		? selectors.filter(
				({ _parent_id, _can_be_removed }) =>
					_parent_id !== "" && !_can_be_removed
		  )
		: selectors;

	if (is_edit && !selectors.length) {
		return null;
	}

	return (
		<Div
			classes="selector_group-selectors"
			onClick={() => {
				open ? open() : noop;
			}}
		>
			{!selectors.length ? (
				<Div classes="selector-text">{__("...there are no selectors yet")}</Div>
			) : (
				<Fragment>
					{custom_parent_selector && (
						<Div classes={["selector-text,", "selector-parent"]}>
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

						return <BlockSelectorPreview key={selector.id} {...selector} />;
					})}
				</Fragment>
			)}
		</Div>
	);
};

export default SelectorsPreview;
