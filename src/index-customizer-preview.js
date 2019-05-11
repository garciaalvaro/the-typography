import WebFont from "webfontloader";

($ => {
	const l = console.log.bind(console); // Console log shortcut helper
	const updateStylesheet = () => {
		let css;
		css = state.styles.map(({ selector, css }) => `${selector}{${css}}`);
		css = css.join("");

		state.$stylesheet.html(css);
	};
	const state = {
		gfonts_loaded: [],
		styles: [],
		$stylesheet: null
	};

	// Create stylesheet if it doesn't exist yet.
	if (!state.$stylesheet) {
		state.$stylesheet = $("head")
			.append('<style type="text/css" id="thet-styles" />')
			.find("#thet-styles");
	}

	wp.customize.bind("preview-ready", () => {
		// Listen to the customizer typography changes.
		wp.customize.preview
			// Style added or modified.
			.bind("thet-add_modify_style", style_changed => {
				if (state.styles.find(({ id }) => id === style_changed.id)) {
					state.styles = state.styles.map(style => {
						if (style.id === style_changed.id) {
							return style_changed;
						}

						return style;
					});
				} else {
					state.styles.push(style_changed);
				}

				updateStylesheet();
			})
			// Style removed.
			.bind("thet-remove_style", typography_ids => {
				state.styles = state.styles.filter(
					({ typography_id }) => !typography_ids.includes(typography_id)
				);

				updateStylesheet();
			})
			// Add font.
			.bind("thet-add_gfonts", gfonts_to_load => {
				// const families = gfonts_to_load.map(({ family, variants }) => {
				// 	family = family.replace(/_/g, "+");
				// 	variants = variants.join(",");
				// 	return `${family}:${variants}`;
				// });
				// WebFont.load({
				// 	google: {
				// 		families
				// 	},
				// 	active: () => {
				// 		loadGFonts(gfonts_to_load);
				// 	}
				// });
			})
			// Send the post data from the current window to the customizer.
			.bind("active", () => {
				l("active");
				the_typography.is_front_page = the_typography.is_front_page == true;
				the_typography.is_404 = the_typography.is_404 == true;

				wp.customize.preview.send("thet-page_data", the_typography);
			});
	});
})(jQuery);
