<?php

namespace THETYPOGRAPHY;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

/**
 * Trait CastSchema
 */
class CastSchema {

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
}
