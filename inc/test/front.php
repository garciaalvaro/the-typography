<?php

namespace THETYPOGRAPHY;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

// add_filter( 'wp_head', __NAMESPACE__ . '\test_front' );
function test_front() {

	$typography_args = array(
		'post_type'  => 'the_typography',
		'meta_query' => array(
			array(
				'key'     => 'id',
				'value'   => 'aaa',
				'compare' => '=',
			)
		)
	);

	$typography_query = new \WP_Query( $typography_args );

	var_dump($typography_query->posts[0]->ID);
}
