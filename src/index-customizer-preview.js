import WebFont from "webfontloader";

($ => {
	const l = console.log.bind(console); // Console log shortcut helper
	let styles = [];
	const api = wp.customize;
	let $stylesheet_styles = $("#thet-styles");
	const updateStylesheet = () => {
		let css;
		css = styles.map(({ selector, css }) => `${selector}{${css}}`);
		css = css.join("");

		$stylesheet_styles.html(css);
	};

	// Create stylesheet if it doesn't exist yet.
	if (!$stylesheet_styles.length) {
		$stylesheet_styles = $("head")
			.append('<style type="text/css" id="thet-styles" />')
			.find("#thet-styles");
	}

	api.bind("preview-ready", () => {
		// Listen to the customizer typography styles changes.
		api.preview.bind(
			"thet-add_modify_style",
			({ id, typography_id, selector, css }) => {
				if (styles.find(style => style.id === id)) {
					styles = styles.map(style => {
						if (style.id === id) {
							return { id, typography_id, selector, css };
						}

						return style;
					});
				} else {
					styles.push({ id, typography_id, selector, css });
				}

				updateStylesheet();
			}
		);
		api.preview.bind("thet-remove_style", typography_ids => {
			styles = styles.filter(
				({ typography_id }) => !typography_ids.includes(typography_id)
			);

			updateStylesheet();
		});
		api.preview.bind("thet-gfonts", families =>
			WebFont.load({
				google: {
					families
				}
			})
		);
		// Send the post data from the current window to the customizer.
		api.preview.bind("active", () => {
			l("active");
			the_typography.is_front_page = the_typography.is_front_page == true;
			the_typography.is_404 = the_typography.is_404 == true;

			api.preview.send("thet-page_data", the_typography);
		});
	});
})(jQuery);
