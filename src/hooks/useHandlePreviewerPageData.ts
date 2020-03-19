import { useEffect } from "@wordpress/element";
import { useDispatch } from "@wordpress/data";

import { store_slug } from "utils/data";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const { customize } = (window as any).wp;

export const useHandlePreviewerPageData = () => {
	const { setPreviewerPageData } = useDispatch(store_slug);

	useEffect(() => {
		customize.previewer.bind("ready", () => {
			// Listen to the current post data sent from the Previewer window.
			customize.previewer.bind(
				"the_typography-page_data",
				(page_data: State["previewer_page_data"]) =>
					setPreviewerPageData(page_data)
			);
		});
	}, []);
};
