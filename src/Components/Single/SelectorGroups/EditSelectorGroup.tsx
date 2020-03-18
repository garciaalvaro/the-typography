import { Fragment, useState, useEffect } from "@wordpress/element";
import { useSelect } from "@wordpress/data";

import { EditTitle } from "./EditTitle";
import { EditGroupStyle } from "./EditGroupStyle";
import { EditForceStyles } from "./EditForceStyles";
import { EditParentSelector } from "./EditParentSelector";
import { Selectors } from "../Selectors/Selectors";
import { PreviewSelectors } from "./PreviewSelectors";
import { ButtonResetDefaults } from "../ButtonResetDefaults/ButtonResetDefaults";
import { useIsPredefinedSingle } from "hooks";
import { store_slug } from "utils/data";

const getSelectors = (
	selectors: Selector[],
	type: "editable" | "predefined",
	is_predefined: boolean
) => {
	if (type === "editable") {
		return is_predefined
			? selectors.filter(({ _can_be_removed }) => _can_be_removed)
			: selectors;
	}

	return is_predefined
		? selectors.filter(({ _can_be_removed }) => !_can_be_removed)
		: [];
};

export const EditSelectorGroup: React.ComponentType<SelectorGroup> = props => {
	const { id: group_id, selectors } = props;

	const is_predefined = useIsPredefinedSingle();

	const [selectors_editable, setSelectorsEditable] = useState<Selector[]>(
		getSelectors(selectors, "editable", is_predefined)
	);

	const [selectors_predefined, setSelectorsPredefined] = useState<Selector[]>(
		getSelectors(selectors, "predefined", is_predefined)
	);

	const _typography_style_defaults = useSelect<
		SelectorGroup["_typography_style_defaults"]
	>(select =>
		select(store_slug).getTypographyStyleDefaults({
			group_id
		})
	);

	// When new selectors are added we assign them to predefined or editable.
	useEffect(() => {
		setSelectorsEditable(
			getSelectors(selectors, "editable", is_predefined)
		);
		setSelectorsPredefined(
			getSelectors(selectors, "predefined", is_predefined)
		);
	}, [selectors.length]);

	return (
		<Fragment>
			{_typography_style_defaults && (
				<ButtonResetDefaults group_id={group_id} />
			)}

			{!is_predefined && <EditTitle {...props} />}

			<EditGroupStyle {...props} />
			<EditForceStyles {...props} />
			<EditParentSelector {...props} />

			{is_predefined && !!selectors_predefined.length && (
				<PreviewSelectors {...props} selectors={selectors_predefined} />
			)}

			<Selectors group_id={group_id} selectors={selectors_editable} />
		</Fragment>
	);
};
