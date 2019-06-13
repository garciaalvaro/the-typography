<?php

namespace THETYPOGRAPHY;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

add_filter( 'wp_head', __NAMESPACE__ . '\test_front' );
function test_front() {

	$qq = array_merge(
		array(
			'aa' => 123,
			'bb' => 789,
		),
		array(
			'aa' => 456,
			'cc' => 000,
		)
	);

	// var_dump( $qq );

}
