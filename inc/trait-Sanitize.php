<?php

namespace THETYPOGRAPHY;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

/**
 * Trait Sanitize
 */
trait Sanitize {

	/**
	 * Sanitize string and/or integer.
	 */
	public function sanitizeStringInteger( $value ) {
		if ( ! is_string( $value ) && ! is_int( $value ) ) {
			return '';
		}

		return $value;
	}

	/**
	 * Sanitize id.
	 */
	public function sanitizeId( $value ) {
		$value = $this->sanitizeStringInteger( $value );

		return \sanitize_key( $value );
	}

	/**
	 * Sanitize text.
	 */
	public function sanitizeText( $value ) {
		$value = $this->sanitizeStringInteger( $value );

		return \sanitize_text_field( $value );
	}

	/**
	 * Sanitize float.
	 */
	public function sanitizeFloat( $value ) {
		return round( abs( floatval( $value ) ), 2 );
	}

	/**
	 * Sanitize integer.
	 */
	public function sanitizeInteger( $value ) {
		return \absint( $value );
	}

	/**
	 * Sanitize boolean.
	 *
	 * https://github.com/WPTRT/code-examples/blob/master/customizer/sanitization-callbacks.php
	 */
	public function sanitizeBoolean( $value ) {
		return isset( $value ) && true == $value ? true : false;
	}

	/**
	 * Sanitize array.
	 */
	public function sanitizeArray( $value ) {
		return is_array( $value ) ? $value : array();
	}

	/**
	 * Sanitize value inside an options array.
	 */
	public function sanitizeOptions( $value = '', $options = array(), $default_value = '' ) {

		$value         = \sanitize_key( $value );
		$options       = $this->sanitizeArray( $options );
		$default_value = \sanitize_key( $default_value );

		if ( empty( $options ) ) {
			return $default_value;
		}

		// If the input is a valid key, return it. Otherwise, return the default_value.
		return in_array( $value, $options ) ? $value : $default_value;
	}

	/**
	 * Sanitize number range.
	 */
	public function sanitizeRange( $value = 50, $min = 0, $max = 100 ) {

		$value = \absint( $value );
		$min   = \absint( $min );
		$max   = \absint( $max );

		$value = max( $value, $min );
		$value = min( $value, $max );

		return $value;
	}

	/**
	 * Sanitize float range.
	 */
	public function sanitizeRangeFloat( $value = 50, $min = 0, $max = 100 ) {

		$value = $this->sanitizeFloat( $value );
		$min   = $this->sanitizeFloat( $min );
		$max   = $this->sanitizeFloat( $max );

		$value = max( $value, $min );
		$value = min( $value, $max );

		return (string) $value;
	}

	/**
	 * Sanitize color text input for HEX, rgb and rgba.
	 *
	 * https://stackoverflow.com/a/31245990 | CC BY-SA 3.0
	 */
	public function sanitizeColor( $value ) {

		$color          = \sanitize_text_field( $value );
		$regex_rgb_rgba = '/rgba?\(((25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,\s*?){2}(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,?\s*([01]\.?\d*?)?\)/';
		$regex_hex      = '/#([a-fA-F0-9]{3}){1,2}\b/';

		// If the color is HEX, rgb or rgba return it.
		if (
			true == preg_match( $regex_hex, $color ) ||
			true == preg_match( $regex_rgb_rgba, $color )
		) {
			return $color;
		}

		return '';
	}
}
