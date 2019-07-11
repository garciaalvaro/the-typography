<?php

namespace THETYPOGRAPHY;

use WP_Query;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\load_typographies', 900 );
function load_typographies() {

	// If we are in the previewer of the customizer return;
	// the stylesheet will be added through JavaScript.
	if ( is_customize_preview() ) {
		return;
	}

	new LoadTypographies();
}
