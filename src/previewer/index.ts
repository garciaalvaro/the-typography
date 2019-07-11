const { customize } = (window as any).wp;

customize.bind("preview-ready", () => {
	let style: HTMLStyleElement | null = null;

	customize.preview
		// Google fonts link stylesheet
		.bind("the_typography-googlefonts_href", (href: string) => {
			const link = document.createElement("link");

			link.media = "all";
			link.rel = "stylesheet";
			link.id = "the_typography-googlefonts";

			document.head.appendChild(link);

			link.href = href;
		})
		// CSS stylesheet
		.bind("the_typography-style_string", (style_string: string) => {
			// Create stylesheet if it doesn't exist yet.
			if (!style) {
				style = document.createElement("style");
				style.type = "text/css";
				style.id = "the_typography-style";

				document.head.appendChild(style);
			}

			style.innerHTML = style_string;
		})
		// Current preview window data
		.bind("active", () => {
			const { is_front_page, is_404 } = the_typography;

			customize.preview.send("the_typography-page_data", {
				...the_typography,
				is_front_page: is_front_page == true,
				is_404: is_404 == true
			});
		});
});
