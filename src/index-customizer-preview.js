import WebFont from "webfontloader";

($ => {
	let styles = [];
	const api = wp.customize;
	let $stylesheet_styles = $("#thet-styles");

	// Create stylesheet if it doesn't exist yet.
	if (!$stylesheet_styles.length) {
		$stylesheet_styles = $("head")
			.append('<style type="text/css" id="thet-styles" />')
			.find("#thet-styles");
	}

	api.bind("preview-ready", () => {
		// Listen to the customizer typography styles changes.
		api.preview.bind("thet-styles", style_new => {
			if (styles.find(style => style.id === style_new.id)) {
				styles = styles.map(style => {
					if (style.id === style_new.id) {
						return style_new;
					}

					return style;
				});
			} else {
				styles.push(style_new);
			}

			let css;
			css = styles.map(({ selector, css }) => `${selector}{${css}}`);
			css = css.join("");

			$stylesheet_styles.html(css);
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
			the_typography.is_front_page = the_typography.is_front_page == true;
			the_typography.is_404 = the_typography.is_404 == true;

			api.preview.send("thet-data", the_typography);
		});
	});
})(jQuery);
