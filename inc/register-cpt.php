<?php

namespace THETYPOGRAPHY;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

add_action( 'init', __NAMESPACE__ . '\register_the_typography_cpt' );
function register_the_typography_cpt() {

	$args = array(
		'capabilities' => array(
			'edit_posts'        => 'edit_theme_options',
			'edit_others_posts' => 'edit_theme_options',
			'publish_posts'     => 'edit_theme_options',
		),
		'map_meta_cap' => true,
		'public'       => false,
		'show_in_rest' => true,
		'label'        => 'Typography',
		'supports'     => array(
			'title',
			'custom-fields',
		),
	);

	register_post_type( 'the_typography', $args );
}
