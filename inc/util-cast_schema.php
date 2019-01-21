<?php

namespace THETYPOGRAPHY;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

/**
 * Utility that ensures to return an array.
 */
function cast_array( $value ) {
	if ( is_array( $value ) ) {
		return $value;
	}

	return array();
}

/**
 * Cast an array of properties and values given a schema array.
 */
function cast_schema( $elements = array(), $schema = array() ) {

	foreach ( $elements as $key => $value ) {

		if ( isset( $schema[ $key ] ) ) {
			$type = $schema[ $key ];
		} elseif ( isset( $schema['_all'] ) ) {
			$type = $schema['_all'];
		} else {
			unset( $elements[ $key ] );
			continue;
		}

		if ( is_array( $type ) ) {
			$value = cast_array( $value );

			$elements[ $key ] = cast_schema( $value, $type );
			continue;
		}

		switch ( $type ) {
			case 'id':
				$elements[ $key ] = sanitize_id( $value );
				break;

			case 'text':
				$elements[ $key ] = sanitize_text( $value );
				break;

			case 'float':
				$elements[ $key ] = sanitize_float( $value );
				break;

			case 'integer':
				$elements[ $key ] = sanitize_integer( $value );
				break;

			case 'boolean':
				$elements[ $key ] = sanitize_boolean( $value );
				break;

			case 'color':
				$elements[ $key ] = sanitize_color( $value );
				break;

			default:
				$elements[ $key ] = '';
				break;
		}
	}

	return $elements;
}

function cast_typography_props( $props = array() ) {

	$styles_schema = array(
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

	$schema = array_merge( array(
		'selector_groups' => array(
			'_all' => array_merge( array(
				'force_styles'           => 'boolean',
				'custom_parent_selector' => 'boolean',
				'parent_selector'        => 'text',
				'custom_typography'      => 'boolean',
				'selectors'              => array(
					'_all' => array(
						'selector_type'        => 'id',
						'text_selector'        => 'text',
						'block_selector_root'  => 'text',
						'block_selector_extra' => 'text',
					),
				),
			), $styles_schema ),
		),
		'custom_font'  => 'boolean',
		'font_family'  => 'text',
		'font_variant' => array(
			'_all' => 'id',
		),
	), $styles_schema );

	return cast_schema( $props, $schema );
}
