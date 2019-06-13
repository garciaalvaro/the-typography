<?php

namespace THETYPOGRAPHY;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

function generate_fonts_string( $fonts_array = array() ) {

	$fonts = array();

	foreach ( $fonts_array as $family => $variants ) {
		$fonts[] = $family . ':' . implode( ',', $variants );
	}

	return implode( '|', $fonts );
}
