<?php

namespace THETYPOGRAPHY;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

/**
 * Class CastArray
 */
class CastArray {

	/**
	 * Utility that returns an array.
	 * If the provided value is not an array the function will wrap it in one.
	 */
	static public function castArray( $value ) {
		if ( is_array( $value ) ) {
			return $value;
		}

		if ( is_string( $value ) || is_int( $value ) || is_bool( $value ) ) {
			return array( $value );
		}

		return array();
	}
}
