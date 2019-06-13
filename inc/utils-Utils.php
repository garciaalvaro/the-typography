<?php

namespace THETYPOGRAPHY;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

/**
 * Trait CastArray
 */
class Utils {

	static public function castArray( $value ) {
		return CastArray::castArray( $value );
	}

	static public function castSchema( $elements, $schema ) {
		return CastSchema::castSchema( $elements, $schema );
	}

	static public function setDefaults( $props, $defaults ) {
		return SetDefaults::setDefaults( $props, $defaults );
	}

	static public function sanitizeStringInteger( $value ) {
		return Sanitize::sanitizeStringInteger( $value );
	}

	static public function sanitizeId( $value ) {
		return Sanitize::sanitizeId( $value );
	}

	static public function sanitizeText( $value ) {
		return Sanitize::sanitizeText( $value );
	}

	static public function sanitizeFloat( $value ) {
		return Sanitize::sanitizeFloat( $value );
	}

	static public function sanitizeInteger( $value ) {
		return Sanitize::sanitizeInteger( $value );
	}

	static public function sanitizeBoolean( $value ) {
		return Sanitize::sanitizeBoolean( $value );
	}

	static public function sanitizeArray( $value ) {
		return Sanitize::sanitizeArray( $value );
	}

	static public function sanitizeOptions( $value, $options, $default_value ) {
		return Sanitize::sanitizeOptions( $value, $options, $default_value );
	}

	static public function sanitizeRange( $value, $min, $max ) {
		return Sanitize::sanitizeRange( $value, $min, $max );
	}

	static public function sanitizeRangeFloat( $value, $min, $max ) {
		return Sanitize::sanitizeRangeFloat( $value );
	}

	static public function sanitizeColor( $value ) {
		return Sanitize::sanitizeColor( $value );
	}
}
