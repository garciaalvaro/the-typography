import WebFont from "webfontloader";

($ => {
	const { unionBy } = lodash;
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
				const font_old = state.styles.find(({ id }) => id === style_changed.id);

				if (font_old) {
					state.styles = state.styles.map(style => {
						if (style.id === style_changed.id) {
							return style_changed;
						}

						return style;
					});
				} else {
					state.styles.unshift(style_changed);
				}

				updateStylesheet();
			})
			// Style removed.
			.bind("thet-remove_style", typographies_id => {
				state.styles = state.styles.filter(
					({ typography_id }) => !typographies_id.includes(typography_id)
				);

				updateStylesheet();
			})
			// Add font.
			.bind("thet-load_gfonts", gfonts => {
				// Remove already existent variants from the new fonts.
				gfonts = gfonts.map(font_new => {
					const font_old = state.gfonts_loaded.find(
						font_old => font_old.id === font_new.id
					);

					if (!font_old) {
						return { ...font_new, existed: false };
					}

					return {
						existed: true,
						id: font_new.id,
						family: font_new.family,
						variants: font_new.variants.filter(
							({ variant: variant_new }) =>
								!font_old.variants.find(
									({ variant: variant_old }) => variant_old === variant_new
								)
						)
					};
				});

				// Remove the fonts which after the previous filter dont have variants
				gfonts = gfonts.filter(font_new => {
					if (!font_new.existed) {
						return true;
					}

					if (font_new.variants.length) {
						return true;
					}

					return false;
				});

				if (!gfonts.length) {
					return;
				}

				// Remove unused props
				gfonts = gfonts.map(({ id, family, variants }) => {
					return {
						id,
						family,
						variants: variants.map(({ variant }) => ({ variant }))
					};
				});

				// Prepare fonts to load with WebFont
				const families = gfonts.map(({ family, variants }) => {
					family = family.replace(/_/g, "+");
					variants = variants.map(({ variant }) => variant).join(",");

					return `${family}:${variants}`;
				});

				WebFont.load({
					google: {
						families
					},
					active: () => {
						gfonts = gfonts.map(font_new => {
							const font_old = state.gfonts_loaded.find(
								font_old => font_old.id === font_new.id
							);

							if (!font_old) {
								return font_new;
							}

							return {
								id: font_new.id,
								family: font_new.family,
								variants: [...font_old.variants, ...font_new.variants]
							};
						});

						state.gfonts_loaded = unionBy(gfonts, state.gfonts_loaded, "id");
					}
				});
			})
			// Send the post data from the current window to the customizer.
			.bind("active", () => {
				the_typography.is_front_page = the_typography.is_front_page == true;
				the_typography.is_404 = the_typography.is_404 == true;

				wp.customize.preview.send("thet-page_data", the_typography);
			});
	});
})(jQuery);
