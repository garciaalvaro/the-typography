<?php

namespace THETYPOGRAPHY;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

function get_post_types_prepared() {

	$post_types = get_post_types( array( 'public' => true ) );
	$post_types_prepared = array();

	foreach ( $post_types as $slug ) {
		$obj = get_post_type_object( $slug );

		$post_types_prepared[] = array(
			'slug' => $slug,
			'name' => $obj->labels->name,
		);
	}

	return $post_types_prepared;
}

add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\enqueue_editor', 901 );
function enqueue_editor() {

	if ( ! current_user_can( 'edit_theme_options' ) ) {
		return;
	}

	wp_enqueue_style(
		PLUGIN_NAME . '-editor',
		BUILD_DIR . PLUGIN_NAME . '-editor.css',
		array(),
		PLUGIN_VERSION
	);

	wp_enqueue_script(
		PLUGIN_NAME . '-editor',
		BUILD_DIR . PLUGIN_NAME . '-editor.js',
		array(
			'jquery',
			'lodash',
			'wp-i18n',
			'wp-compose',
			'wp-element',
			'wp-components',
			'wp-editor',
			'wp-edit-post',
			'wp-plugins',
			'wp-data',
			'wp-rich-text',
			'wp-hooks',
		),
		PLUGIN_VERSION,
		true // Enqueue in the footer.
	);

	$data = array(
		'post_types' => get_post_types_prepared(),
	);

	wp_localize_script( PLUGIN_NAME . '-editor', 'the_typography', $data );

}

add_action( 'customize_controls_enqueue_scripts', __NAMESPACE__ . '\enqueue_customizer', 901 );
function enqueue_customizer() {

	wp_enqueue_style(
		PLUGIN_NAME . '-customizer',
		BUILD_DIR . PLUGIN_NAME . '-customizer.css',
		array(),
		PLUGIN_VERSION
	);

	wp_enqueue_script(
		PLUGIN_NAME . '-customizer',
		BUILD_DIR . PLUGIN_NAME . '-customizer.js',
		array(
			'customize-controls',
			'jquery',
			'lodash',
			'wp-i18n',
			'wp-compose',
			'wp-element',
			'wp-components',
			'wp-editor',
			'wp-plugins',
			'wp-data',
			'wp-rich-text',
			'wp-hooks',
			'wp-blocks',
			'wp-block-library',
		),
		PLUGIN_VERSION,
		true // Enqueue in the footer.
	);

	$data = array(
		'post_types' => get_post_types_prepared(),
	);

	wp_localize_script( PLUGIN_NAME . '-customizer', 'the_typography', $data );

	// Plugins can enqueue their block registration script so the block
	// can be selected in the Typography selector inside the Customizer.
	do_action( 'thet_enqueue_block_script_in_customizer' );

}

add_action( 'customize_preview_init', __NAMESPACE__ . '\enqueue_customizer_preview', 901 );
function enqueue_customizer_preview() {

	wp_enqueue_script(
		PLUGIN_NAME . '-previewer',
		BUILD_DIR . PLUGIN_NAME . '-previewer.js',
		array(
			'customize-preview',
			'jquery',
			'lodash',
		),
		PLUGIN_VERSION,
		true // Enqueue in the footer.
	);
}
