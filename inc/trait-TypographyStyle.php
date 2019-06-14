<?php

namespace THETYPOGRAPHY;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

/**
 * Trait TypographyStyle
 */
trait TypographyStyle {

	protected $style_keys = array(
		'color',
		'font_size',
		'line_height',
		'letter_spacing',
		'font_style',
		'font_weight',
		'text_transform',
		'text_decoration',
	);

	protected function getCssStyle( $style, $force_styles = false ) {

		$important = $force_styles ? '!important' : '';
		$css_style = array();

		foreach ( $style as $key => $value) {

			if ( 'font_variant' === $key ) {
				continue;
			}

			if ( 'font_family' === $key ) {
				$value = "'" . str_replace( '_', ' ', $value ) . "'";
			}

			if ( 'font_size' === $key || 'letter_spacing' === $key ) {
				$value = $value . 'px';
			}

			$key = str_replace( '_', '-', $key );

			$css_style[] = $key . ':' . $value . $important;
		}

		return implode( ';', $css_style );
	}

	protected function filterCustom( $props, $style_keys ) {

		$style = array();

		foreach ( $props as $key => $value ) {
			if ( ! in_array( $key, $style_keys ) ) {
				continue;
			}

			if ( 'font_family' === $key || 'font_variant' === $key ) {
				if ( $props['custom_font'] ) {
					$style[ $key ] = $value;
				}

				continue;
			}

			if ( $props[ 'custom_' . $key ] ) {
				$style[ $key ] = $value;
			}
		}

		return $style;
	}
}
