import l from "./js/utils/log";
import WebFont from "webfontloader";

($ => {
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
		api.preview.bind("thet-styles", styles => $stylesheet_styles.html(styles));
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
