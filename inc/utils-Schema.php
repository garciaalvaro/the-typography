<?php

namespace THETYPOGRAPHY;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

/**
 * Class Schema
 */
class Schema {

	/**
	 * Cast an array of properties and values given a schema array.
	 */
	static public function castSchema( $elements = array(), $schema = array() ) {

		foreach ( $elements as $key => $value ) {

			if ( isset( $schema[ $key ] ) ) {
				$type = $schema[ $key ];
			} elseif ( isset( $schema['_all'] ) ) {
				$type = $schema['_all'];
			} else {
				unset( $elements[ $key ] );
				continue;
			}

			if ( isset( $type['_options'] ) ) {
				$options       = $type['_options'];
				$default_value = $type['_default_value'];
				$type          = 'options';
			}

			if ( is_array( $type ) ) {
				$value = CastArray::castArray( $value );

				$elements[ $key ] = self::castSchema( $value, $type );
				continue;
			}

			switch ( $type ) {
				case 'id':
					$elements[ $key ] = Sanitize::sanitizeId( $value );
					break;

				case 'text':
					$elements[ $key ] = Sanitize::sanitizeText( $value );
					break;

				case 'float':
					$elements[ $key ] = Sanitize::sanitizeFloat( $value );
					break;

				case 'integer':
					$elements[ $key ] = Sanitize::sanitizeInteger( $value );
					break;

				case 'boolean':
					$elements[ $key ] = Sanitize::sanitizeBoolean( $value );
					break;

				case 'color':
					$elements[ $key ] = Sanitize::sanitizeColor( $value );
					break;

				case 'no_cast':
					$elements[ $key ] = $value;
					break;

				case 'options':
					$elements[ $key ] =
						Sanitize::sanitizeOptions( $value, $options, $default_value );
					break;

				default:
					$elements[ $key ] = '';
					break;
			}
		}

		return $elements;
	}

	static public $selector_group = array(
		'_id'                    => 'id',
		'force_styles'           => 'boolean',
		'custom_parent_selector' => 'boolean',
		'parent_selector'        => 'text',
		'custom_typography'      => 'boolean',
		'selectors'              => array( '_all' => 'no_cast' ),
		//
		'custom_color'           => 'boolean',
		'color'                  => 'color',
		'custom_font_size'       => 'boolean',
		'font_size'              => 'integer',
		'custom_line_height'     => 'boolean',
		'line_height'            => 'float',
		'custom_letter_spacing'  => 'boolean',
		'letter_spacing'         => 'float',
		'custom_font_style'      => 'boolean',
		'font_style'             => array(
			'_options'       => array( 'italic', 'normal', 'oblique' ),
			'_default_value' => 'normal',
		),
		'custom_font_weight'     => 'boolean',
		'font_weight'            => array(
			'_options' => array(
				'100', '200', '300',
				'400', '500', '600',
				'700', '800', '900',
			),
			'_default_value' => '400',
		),
		'custom_text_transform'  => 'boolean',
		'text_transform'         => array(
			'_options'       => array( 'none', 'capitalize', 'uppercase', 'lowercase' ),
			'_default_value' => 'none',
		),
		'custom_text_decoration' => 'boolean',
		'text_decoration'        => array(
			'_options'       => array( 'none', 'line-through', 'overline', 'underline' ),
			'_default_value' => 'none',
		),
	);

	static public $typography = array(
		'is_active'              => 'boolean',
		'selector_groups'        => array( '_all' => array( '_all' => 'no_cast' ) ),
		//
		'custom_font'            => 'boolean',
		'font_family'            => 'text',
		'font_variant'           => array( '_all' =>
			array(
				'_options' => array(
					'100', '100i', '200', '200i', '300', '300i',
					'400', '400i', '500', '500i', '600', '600i',
					'700', '700i', '800', '800i', '900', '900i',
				),
				'_default_value' => '400',
			),
		),
		//
		'custom_color'           => 'boolean',
		'color'                  => 'color',
		'custom_font_size'       => 'boolean',
		'font_size'              => 'integer',
		'custom_line_height'     => 'boolean',
		'line_height'            => 'float',
		'custom_letter_spacing'  => 'boolean',
		'letter_spacing'         => 'float',
		'custom_font_style'      => 'boolean',
		'font_style'             => array(
			'_options'       => array( 'italic', 'normal', 'oblique' ),
			'_default_value' => 'normal',
		),
		'custom_font_weight'     => 'boolean',
		'font_weight'            => array(
			'_options' => array(
				'100', '200', '300',
				'400', '500', '600',
				'700', '800', '900',
			),
			'_default_value' => '400',
		),
		'custom_text_transform'  => 'boolean',
		'text_transform'         => array(
			'_options'       => array( 'none', 'capitalize', 'uppercase', 'lowercase' ),
			'_default_value' => 'none',
		),
		'custom_text_decoration' => 'boolean',
		'text_decoration'        => array(
			'_options'       => array( 'none', 'line-through', 'overline', 'underline' ),
			'_default_value' => 'none',
		),
	);
}
