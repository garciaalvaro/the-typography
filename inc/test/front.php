<?php

namespace THETYPOGRAPHY;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

add_filter( 'wp_head', __NAMESPACE__ . '\test_front' );
function test_front() {

	$schema = array(
		'qqq' => array(
			'_options'       => array( '700' ),
			'_default_value' => '400',
		),
		// 'font_variant' => array( '_all' =>
		// 	// 'id'
		// 	array(
		// 		'_options'       => array( '400', '700' ),
		// 		'_default_value' => '400',
		// 	),
		// ),
	);

	$qq = array(
		'qqq' => '700'
		// 'font_variant' => array( '300', '700' )
	);

	// var_dump( Utils::castSchema( $qq, $schema ) );

}
