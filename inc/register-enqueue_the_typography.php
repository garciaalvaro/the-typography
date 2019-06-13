<?php

namespace THETYPOGRAPHY;

use WP_Query;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\enqueue_the_typography', 900 );
function enqueue_the_typography() {

	// If we are in the previewer of the customizer return;
	// the stylesheet will be added using JavaScript.
	if ( is_customize_preview() ) {
		return;
	}

	$current_post_type = get_post_type();
	$current_template  = is_singular() ? 'single' : 'index';

	$posts_per_page = apply_filters( 'the_typography_posts_per_page', 99 );

	$tax_query = array(
		'relation' => 'OR',
		array(
			array(
				'taxonomy' => 'context_type',
				'field'    => 'slug',
				'terms'    => 'all_site',
			),
		),
	);

	if ( is_404() ) {
		$tax_query[] = array(
			array(
				'taxonomy' => 'context_type',
				'field'    => 'slug',
				'terms'    => '404_page',
			),
		);
	} else {

		if ( is_front_page() ) {
			$tax_query[] = array(
				array(
					'taxonomy' => 'context_type',
					'field'    => 'slug',
					'terms'    => 'front_page',
				),
			);
		}

		$tax_query[] = array(
			array(
				'taxonomy' => 'context_type',
				'field'    => 'slug',
				'terms'    => 'post_type',
			),
			array(
				'taxonomy' => 'context_post_type',
				'field'    => 'slug',
				'terms'    => array( $current_post_type ),
			),
			array(
				'taxonomy' => 'context_post_type_template',
				'field'    => 'slug',
				'terms'    => array( $current_template ),
			),
		);
	}

	$typography_args = array(
		'post_type'      => 'the_typography',
		'posts_per_page' => $posts_per_page,
		'tax_query'      => $tax_query,
	);

	$fonts_array  = array();
	$styles_array = array();

	$query = new WP_Query( $typography_args );

	if ( 0 === $query->found_posts ) {
		return;
	}

	foreach ( $query->posts as $post ) {

		$typography = new TypographyFront( $post->ID );

		if ( ! $typography->isValid() || ! $typography->isActive() ) {
			continue;
		}

		$font = $typography->getFont();

		if ( ! empty( $font ) ) {

			if ( isset( $fonts_array[ $font['family'] ] ) ) {

				$fonts_array[ $font['family'] ] = array_merge(
					$font['variants'],
					$fonts_array[ $font['family'] ]
				);

				$fonts_array[ $font['family'] ] = array_unique( $fonts_array[ $font['family'] ] );

			} else {

				$fonts_array[ $font['family'] ] = $font['variants'];

			}
		}

		$styles_array[] = $typography->getCssString();
	}

	$fonts_array  = apply_filters( 'the_typography_fonts_before_enqueue', $fonts_array );
	$fonts_string = generate_fonts_string( $fonts_array );

	if ( ! empty( $fonts_string ) ) {

		wp_enqueue_style(
			'thet-gfonts',
			esc_url( 'https://fonts.googleapis.com/css?family=' . $fonts_string ),
			array(),
			PLUGIN_VERSION
		);
	}

	if ( ! empty( $styles_array ) ) {

		// https://wordpress.stackexchange.com/a/282868 | CC BY-SA 3.0
		wp_register_style( 'thet-styles', false );
		wp_enqueue_style( 'thet-styles' );

		wp_add_inline_style( 'thet-styles', wp_strip_all_tags( implode( '', $styles_array ) ) );

	}
}
