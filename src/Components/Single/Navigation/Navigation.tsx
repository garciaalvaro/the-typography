import { Fragment, useState, useEffect } from "@wordpress/element";
import { useSelect } from "@wordpress/data";

import "./Navigation.styl";
import { Div } from "utils/Components";
import { store_slug } from "utils/data";
import { ButtonBack } from "./ButtonBack";
import { ButtonUndo } from "./ButtonUndo";
import { ButtonUpdate } from "./ButtonUpdate";
import { ButtonSave } from "./ButtonSave";
import { MessageJustSaved } from "./MessageJustSaved";

export const Navigation: React.ComponentType = () => {
	const is_new_single = useSelect<boolean>(select =>
		select(store_slug).isNewSingle()
	);

	const has_changed_single = useSelect<State["has_changed_single"]>(select =>
		select(store_slug).hasChangedSingle()
	);

	const [update_counter, setUpdateCounter] = useState(0);

	useEffect(() => {
		if (has_changed_single) {
			setUpdateCounter(0);
		}
	}, [has_changed_single]);

	return (
		<Div id="navigation-single" className="navigation">
			<ButtonBack />

			{has_changed_single &&
				(is_new_single ? (
					<ButtonSave setUpdateCounter={setUpdateCounter} />
				) : (
					<Fragment>
						<ButtonUndo />
						<ButtonUpdate setUpdateCounter={setUpdateCounter} />
					</Fragment>
				))}

			<MessageJustSaved
				is_new={is_new_single}
				update_counter={update_counter}
			/>
		</Div>
	);
};
