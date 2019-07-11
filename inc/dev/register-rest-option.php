<?php

namespace THETYPOGRAPHY;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

/**
 * Permissions check.
 */
function the_typography_option_permission() {

	if ( current_user_can( 'edit_theme_options' ) ) {
		return true;
	}

	return false;
}

/**
 * Register route that includes the_typography option data
 */
add_action( 'rest_api_init', __NAMESPACE__ . '\register_route_the_typography_option' );
function register_route_the_typography_option() {

	register_rest_route(
		'the_typography/v1',
		'/option',
		array(
			'methods'             => 'GET',
			'callback'            => __NAMESPACE__ . '\get_the_typography_option',
			'permission_callback' => __NAMESPACE__ . '\the_typography_option_permission',
		)
	);
}
function get_the_typography_option() {
	return get_option( 'the_typography' );
}
