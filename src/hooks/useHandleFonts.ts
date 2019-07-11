import { useEffect, useRef } from "@wordpress/element";
import { useSelect, useDispatch } from "@wordpress/data";
import { applyFilters } from "@wordpress/hooks";

import { generateFontHref } from "utils/tools";
import { store_slug, is_customizer } from "utils/data";

const { customize } = (window as any).wp;

const fetch_google_fonts = applyFilters(
	"the_typography.fetchGoogleFonts",
	true
);

export const useHandleFonts = () => {
	const fonts_to_load = useSelect<FontToLoad[]>(select =>
		select(store_slug).getFontsToLoad()
	);
	const { setFontsLoaded } = useDispatch(store_slug);
	const is_loading = useRef(false);
	const href = useRef("");

	useEffect(() => {
		if (!fetch_google_fonts || is_loading.current || !fonts_to_load.length) {
			return;
		}

		is_loading.current = true;

		const link: HTMLLinkElement = document.createElement("link");

		link.media = "all";
		link.rel = "stylesheet";

		document.head.appendChild(link);

		// TODO: Handle onerror
		link.onload = () => {
			setFontsLoaded(
				fonts_to_load.map(({ family, variants_to_load }) => ({
					family,
					variants: variants_to_load
				}))
			);

			is_loading.current = false;
		};

		href.current = generateFontHref(fonts_to_load);

		link.href = href.current;

		if (is_customizer) {
			customize.previewer.send("the_typography-googlefonts_href", href.current);
		}
	}, [fonts_to_load]);

	useEffect(() => {
		if (!fetch_google_fonts || !is_customizer) {
			return;
		}

		customize.previewer.bind("ready", () =>
			customize.previewer.send("the_typography-googlefonts_href", href.current)
		);
	}, []);
};
