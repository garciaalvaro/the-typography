<?php

namespace THETYPOGRAPHY;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

/**
 * Modify the_typography cpt to make it public
 */
add_filter( 'register_post_type_args', __NAMESPACE__ . '\cpt_public', 10, 2 );
function cpt_public( $args, $post_type ) {

	if ( 'the_typography' !== $post_type ) {
		return $args;
	}

	$modified_args = array(
		'public' => true,
	);

	return array_merge( $args, $modified_args );
}
