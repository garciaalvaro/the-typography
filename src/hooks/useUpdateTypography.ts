import { useDispatch, useSelect } from "@wordpress/data";

import { store_slug } from "utils/data/plugin";
import { prepareTypographyRaw } from "utils/tools/prepareTypographyRaw";

export const useUpdateTypography = () => {
	const taxonomies = useSelect<State["taxonomies"]>(select =>
		select(store_slug).getTaxonomies()
	);

	const single = useSelect<State["single"]>(select =>
		select(store_slug).getSingle()
	);

	const { saveEntityRecord } = useDispatch("core");
	const { updateTypography, setHasChangedSingle } = useDispatch(store_slug);

	const update = async () => {
		// We update this value now, so the update/undo buttons are hidden.
		setHasChangedSingle(false);

		const typography_raw = prepareTypographyRaw(single, taxonomies);
		const typography = await saveEntityRecord<TypographyRaw>(
			"postType",
			"the_typography",
			typography_raw
		);

		if (typography) {
			updateTypography({ ...single, id: typography.id });
		}
	};

	return update;
};
