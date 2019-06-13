<?php

namespace THETYPOGRAPHY;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

/**
 * Trait CastSchema
 */
trait CastSchema {

	use Sanitize, CastArray;

	/**
	 * Cast an array of properties and values given a schema array.
	 */
	protected function castSchema( $elements = array(), $schema = array() ) {

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
				$value = $this->castArray( $value );

				$elements[ $key ] = $this->castSchema( $value, $type );
				continue;
			}

			switch ( $type ) {
				case 'id':
					$elements[ $key ] = $this->sanitizeId( $value );
					break;

				case 'text':
					$elements[ $key ] = $this->sanitizeText( $value );
					break;

				case 'float':
					$elements[ $key ] = $this->sanitizeFloat( $value );
					break;

				case 'integer':
					$elements[ $key ] = $this->sanitizeInteger( $value );
					break;

				case 'boolean':
					$elements[ $key ] = $this->sanitizeBoolean( $value );
					break;

				case 'color':
					$elements[ $key ] = $this->sanitizeColor( $value );
					break;

				case '_no_cast':
					$elements[ $key ] = $value;
					break;

				default:
					$elements[ $key ] = '';
					break;
			}
		}

		return $elements;
	}
}
