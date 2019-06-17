<?php

namespace THETYPOGRAPHY;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

add_filter( 'wp_head', __NAMESPACE__ . '\test_front' );
function test_front() {

	// delete_option('the_typography');
	// delete_transient( 'the_typography_is_saving');
	// delete_option('qqq');
	// var_dump(get_option('the_typography'));
	// var_dump(get_option('qqq'));

}
