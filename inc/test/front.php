<?php

namespace THETYPOGRAPHY;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

add_filter( 'wp_head', __NAMESPACE__ . '\test_front' );
function test_front() {

	array(
        'selector_type' => 'block',
        'block_name' => 'core/quote',
        // 'block_title' => 'Quote',
        // 'block_selector_root' => '.wp-block-quote',
        // 'block_selector_extra' => 'cite',
        'block_element_label' => 'Citation',
	);

	$data = json_decode( "[{\"selectors\":[{\"selector_type\":\"block\",\"block_name\":\"core/quote\",\"block_title\":\"Quote\",\"block_selector_root\":\".wp-block-quote\",\"block_selector_extra\":\"cite\",\"block_element_label\":\"Citation\"}],\"custom_title\":true,\"title\":\"algo\",\"custom_typography\":true,\"custom_font_size\":true,\"font_size\":38}]", true);
	highlight_string("<?php\n\$data =\n" . var_export($data, true) . ";\n?>");
}
