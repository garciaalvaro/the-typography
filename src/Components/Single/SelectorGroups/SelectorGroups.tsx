import { useEffect, useState } from "@wordpress/element";
import { useSelect } from "@wordpress/data";

import "./SelectorGroups.styl";
import { Div } from "utils/Components";
import { store_slug } from "utils/data";
import { useNewElementJustAdded } from "hooks";
import { useIsFirstRender } from "utils/hooks";
import { SelectorGroup } from "./SelectorGroup";
import { ButtonAdd } from "./ButtonAdd";

export const SelectorGroups: React.ComponentType = props => {
	const has_changed_single = useSelect<State["has_changed_single"]>(select =>
		select(store_slug).hasChangedSingle()
	);
	const [undo_counter, setUndoCounter] = useState(0);
	const is_first_render = useIsFirstRender();
	const selector_groups = useSelect<SelectorGroup[]>(select =>
		select(store_slug).getSelectorGroups()
	);
	const new_element_just_added = useNewElementJustAdded(selector_groups);

	// Some of the inputs in Selectors have a local state which, when
	// Undo is triggered, has to be updated manually (as it is a clone of the sotre one).
	// To avoid doing this we add a counteer which will modify the key in map. This way
	// React will interpret they are a different element and mount them
	// with the current store value.
	useEffect(() => {
		if (!has_changed_single && !is_first_render) {
			setUndoCounter(counter => counter + 1);
		}
	}, [has_changed_single]);

	return (
		<Div id="selector_groups">
			<ButtonAdd new_element_just_added={new_element_just_added} />

			{selector_groups.map((group, index) => (
				<SelectorGroup
					key={group.id + undo_counter}
					{...group}
					is_new={new_element_just_added && index === 0}
				/>
			))}
		</Div>
	);
};
