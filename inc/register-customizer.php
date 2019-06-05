<?php

namespace THETYPOGRAPHY;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

add_action( 'customize_register', __NAMESPACE__ . '\add_customizer_section' );
function add_customizer_section( $wp_customize ) {

	$wp_customize->add_section( 'section_thet' , array(
		'title'    => __( 'The Typography', 'thet' ),
		'priority' => 1,
	) );

	$wp_customize->add_control(
		'control_thet',
		array(
			'section'  => 'section_thet',
			'settings' => array(),// No setting associated.
		)
	);
}

add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\localize_previewer_window_data' );
function localize_previewer_window_data() {

	// If we are in the previewer of the customizer pass the current window data.
	if ( ! is_customize_preview() ) {
		return;
	}

	$current_post_type = get_post_type();
	$current_template  = is_singular() ? 'single' : 'index';

	$data = array(
		'post_type'     => $current_post_type,
		'template'      => $current_template,
		'is_front_page' => is_front_page(),
		'is_404'        => is_404(),
	);

	wp_localize_script( PLUGIN_NAME . '-previewer', 'the_typography_page_data', $data );
}
