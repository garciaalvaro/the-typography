<?php

namespace THETYPOGRAPHY;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

function register_the_typography_meta() {

	register_post_meta( 'the_typography', 'selector_groups', array(
		'show_in_rest'      => true,
		'single'            => true,
		'type'              => 'string',
		'sanitize_callback' => 'sanitize_text_field',
	) );

	register_post_meta( 'the_typography', 'custom_font', array(
		'show_in_rest'      => true,
		'single'            => true,
		'type'              => 'boolean',
		'sanitize_callback' => 'absint',
	) );
	register_post_meta( 'the_typography', 'font_family', array(
		'show_in_rest'      => true,
		'single'            => true,
		'type'              => 'string',
		'sanitize_callback' => 'sanitize_text_field',
	) );
	register_post_meta( 'the_typography', 'font_variant', array(
		'show_in_rest'      => true,
		'single'            => false,
		'type'              => 'string',
		'sanitize_callback' =>
			function ( $value ) {
				$options = array(
					'100', '100i', '200', '200i', '300', '300i',
					'400', '400i', '500', '500i', '600', '600i',
					'700', '700i', '800', '800i', '900', '900i',
				);
				$default_value = '400';

				return sanitize_options( $value, $options, $default_value );
			},
	) );

	register_post_meta( 'the_typography', 'custom_font_size', array(
		'show_in_rest'      => true,
		'single'            => true,
		'type'              => 'boolean',
		'sanitize_callback' => 'absint',
	) );
	register_post_meta( 'the_typography', 'font_size', array(
		'show_in_rest'      => true,
		'single'            => true,
		'type'              => 'integer',
		'sanitize_callback' =>
			function ( $value ) {
				$min = 5;
				$max = 60;
				return sanitize_range( $value, $min, $max );
			},
	) );

	register_post_meta( 'the_typography', 'custom_line_height', array(
		'show_in_rest'      => true,
		'single'            => true,
		'type'              => 'boolean',
		'sanitize_callback' => 'absint',
	) );
	register_post_meta( 'the_typography', 'line_height', array(
		'show_in_rest'      => true,
		'single'            => true,
		'type'              => 'number',
		'sanitize_callback' =>
			function ( $value ) {
				$min = 0.3;
				$max = 3;
				return sanitize_range_float( $value, $min, $max );
			},
	) );

	register_post_meta( 'the_typography', 'custom_letter_spacing', array(
		'show_in_rest'      => true,
		'single'            => true,
		'type'              => 'boolean',
		'sanitize_callback' => 'absint',
	) );
	register_post_meta( 'the_typography', 'letter_spacing', array(
		'show_in_rest'      => true,
		'single'            => true,
		'type'              => 'number',
		'sanitize_callback' =>
			function ( $value ) {
				$min = 0;
				$max = 10;
				return sanitize_range_float( $value, $min, $max );
			},
	) );

	register_post_meta( 'the_typography', 'custom_color', array(
		'show_in_rest'      => true,
		'single'            => true,
		'type'              => 'boolean',
		'sanitize_callback' => 'absint',
	) );
	register_post_meta( 'the_typography', 'color', array(
		'show_in_rest'      => true,
		'single'            => true,
		'type'              => 'string',
		'sanitize_callback' => __NAMESPACE__ . '\sanitize_color',
	) );

	register_post_meta( 'the_typography', 'custom_font_weight', array(
		'show_in_rest'      => true,
		'single'            => true,
		'type'              => 'boolean',
		'sanitize_callback' => 'absint',
	) );
	register_post_meta( 'the_typography', 'font_weight', array(
		'show_in_rest'      => true,
		'single'            => true,
		'type'              => 'string',
		'sanitize_callback' =>
			function ( $value ) {
				$options = array(
					'100', '200', '300',
					'400', '500', '600',
					'700', '800', '900',
				);
				$default_value = '400';

				return sanitize_options( $value, $options, $default_value );
			},
	) );

	register_post_meta( 'the_typography', 'custom_font_style', array(
		'show_in_rest'      => true,
		'single'            => true,
		'type'              => 'boolean',
		'sanitize_callback' => 'absint',
	) );
	register_post_meta( 'the_typography', 'font_style', array(
		'show_in_rest'      => true,
		'single'            => true,
		'type'              => 'string',
		'sanitize_callback' =>
			function ( $value ) {
				$options = array(
					'italic',
					'normal',
					'oblique',
				);
				$default_value = 'normal';

				return sanitize_options( $value, $options, $default_value );
			},
	) );

	register_post_meta( 'the_typography', 'custom_text_transform', array(
		'show_in_rest'      => true,
		'single'            => true,
		'type'              => 'boolean',
		'sanitize_callback' => 'absint',
	) );
	register_post_meta( 'the_typography', 'text_transform', array(
		'show_in_rest'      => true,
		'single'            => true,
		'type'              => 'string',
		'sanitize_callback' =>
			function ( $value ) {
				$options = array(
					'none',
					'capitalize',
					'uppercase',
					'lowercase',
				);
				$default_value = 'none';

				return sanitize_options( $value, $options, $default_value );
			},
	) );

	register_post_meta( 'the_typography', 'custom_text_decoration', array(
		'show_in_rest'      => true,
		'single'            => true,
		'type'              => 'boolean',
		'sanitize_callback' => 'absint',
	) );
	register_post_meta( 'the_typography', 'text_decoration', array(
		'show_in_rest'      => true,
		'single'            => true,
		'type'              => 'string',
		'sanitize_callback' =>
			function ( $value ) {
				$options = array(
					'none',
					'line-through',
					'overline',
					'underline',
				);
				$default_value = 'none';

				return sanitize_options( $value, $options, $default_value );
			},
	) );
}
add_action( 'init', __NAMESPACE__ . '\register_the_typography_meta' );
