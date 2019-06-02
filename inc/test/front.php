<?php

namespace THETYPOGRAPHY;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

function test_front($qq) {
	// var_dump(get_post_meta(331)['font_variant']);
	// var_dump($qq);

	return $qq;
}

add_filter( 'the_typography_fonts_before_enqueue', __NAMESPACE__ . '\test_front' );
