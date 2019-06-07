<?php

namespace THETYPOGRAPHY;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

add_filter( 'wp_head', __NAMESPACE__ . '\test_front' );
function test_front() {

	$data = register_my_typography();
	$data = prepare_groups( $data );

	highlight_string("<?php\n\$data =\n" . var_export($data, true) . ";\n?>");
}
