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
	protected $style_defaults = array(
		'custom_color'           => false,
		'color'                  => '',
		'custom_font_size'       => false,
		'font_size'              => 15,
		'custom_line_height'     => false,
		'line_height'            => 1.2,
		'custom_letter_spacing'  => false,
		'letter_spacing'         => 0,
		'custom_font_style'      => false,
		'font_style'             => 'normal',
		'custom_font_weight'     => false,
		'font_weight'            => '400',
		'custom_text_transform'  => false,
		'text_transform'         => 'none',
		'custom_text_decoration' => false,
		'text_decoration'        => 'none',
	);
	protected $style_schema = array(
		'custom_color'           => 'boolean',
		'color'                  => 'color',
		'custom_font_size'       => 'boolean',
		'font_size'              => 'integer',
		'custom_line_height'     => 'boolean',
		'line_height'            => 'float',
		'custom_letter_spacing'  => 'boolean',
		'letter_spacing'         => 'float',
		'custom_font_style'      => 'boolean',
		'font_style'             => 'id',
		'custom_font_weight'     => 'boolean',
		'font_weight'            => 'integer',
		'custom_text_transform'  => 'boolean',
		'text_transform'         => 'id',
		'custom_text_decoration' => 'boolean',
		'text_decoration'        => 'id',
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
