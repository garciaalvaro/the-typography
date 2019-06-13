<?php

namespace THETYPOGRAPHY;

use WP_Query;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

/**
 * Class LoadTypographies
 */
class LoadTypographies {

	private $query_args;
	private $fonts;
	private $styles;

	function __construct() {

		$this->setQueryArgs();

		$this->setFontsStyles();

		$this->enqueueFonts();

		$this->enqueueStyles();
	}

	private function setQueryArgs() {

		$current_post_type = get_post_type();
		$current_template  = is_singular() ? 'single' : 'index';
		$tax_query         = array(
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

		$this->query_args = array(
			'post_type'      => 'the_typography',
			'posts_per_page' => apply_filters( 'the_typography_posts_per_page', 99 ),
			'tax_query'      => $tax_query,
		);
	}

	private function setFontsStyles() {

		$fonts  = array();
		$styles = array();

		$query = new WP_Query( $this->query_args );

		if ( 0 === $query->found_posts ) {
			return null;
		}

		foreach ( $query->posts as $post ) {

			$typography = new TypographyFront( $post->ID );

			if ( ! $typography->isValid() || ! $typography->isActive() ) {
				continue;
			}

			$font = $typography->getFont();

			if ( ! empty( $font ) ) {

				if ( isset( $fonts[ $font['family'] ] ) ) {

					$fonts[ $font['family'] ] = array_merge(
						$font['variants'],
						$fonts[ $font['family'] ]
					);

					$fonts[ $font['family'] ] = array_unique( $fonts[ $font['family'] ] );

				} else {

					$fonts[ $font['family'] ] = $font['variants'];

				}
			}

			$styles[] = $typography->getCssString();
		}

		$this->fonts  = apply_filters( 'the_typography_fonts_before_enqueue', $fonts );
		$this->styles = $styles;
	}

	private function enqueueFonts() {

		if ( empty( $this->fonts ) ) {
			return;
		}

		$fonts = array();

		foreach ( $this->fonts as $family => $variants ) {
			$fonts[] = $family . ':' . implode( ',', $variants );
		}

		wp_enqueue_style(
			'thet-gfonts',
			esc_url( 'https://fonts.googleapis.com/css?family=' . implode( '|', $fonts ) ),
			array(),
			PLUGIN_VERSION
		);
	}

	private function enqueueStyles() {

		if ( empty( $this->styles ) ) {
			return;
		}

		// https://wordpress.stackexchange.com/a/282868 | CC BY-SA 3.0
		wp_register_style( 'thet-styles', false );
		wp_enqueue_style( 'thet-styles' );

		wp_add_inline_style( 'thet-styles', wp_strip_all_tags( implode( '', $this->styles ) ) );
	}
}
