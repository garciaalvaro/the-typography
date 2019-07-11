<?php

namespace THETYPOGRAPHY;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

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
			'lodash',
			'wp-api-fetch',
			'wp-block-editor',
			'wp-components',
			'wp-compose',
			'wp-data',
			'wp-edit-post',
			'wp-element',
			'wp-hooks',
			'wp-html-entities',
			'wp-i18n',
			'wp-plugins',
			'wp-url',
		),
		PLUGIN_VERSION,
		true // Enqueue in the footer.
	);
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
			'lodash',
			'wp-api-fetch',
			'wp-block-editor',
			'wp-block-library',
			'wp-components',
			'wp-compose',
			'wp-data',
			'wp-dom-ready',
			'wp-edit-post',
			'wp-element',
			'wp-hooks',
			'wp-html-entities',
			'wp-i18n',
			'wp-plugins',
			'wp-url',
		),
		PLUGIN_VERSION,
		true // Enqueue in the footer.
	);

	// Plugins can enqueue their block registration script so the block
	// can be selected in the Typography selector inside the Customizer.
	do_action( 'the_typography_after_customizer_enqueue' );

}

add_action( 'customize_preview_init', __NAMESPACE__ . '\enqueue_customizer_preview', 901 );
function enqueue_customizer_preview() {

	wp_enqueue_script(
		PLUGIN_NAME . '-previewer',
		BUILD_DIR . PLUGIN_NAME . '-previewer.js',
		array(
			'customize-preview',
			'lodash',
			'wp-dom-ready',
		),
		PLUGIN_VERSION,
		true // Enqueue in the footer.
	);
}
