<?php

namespace THETYPOGRAPHY;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

/**
 * Sanitize string and/or integer.
 */
function sanitize_string_integer( $value ) {
	if ( ! is_string( $value ) && ! is_int( $value ) ) {
		return '';
	}

	return $value;
}

/**
 * Sanitize id.
 */
function sanitize_id( $value ) {
	$value = sanitize_string_integer( $value );

	return \sanitize_key( $value );
}

/**
 * Sanitize text.
 */
function sanitize_text( $value ) {
	$value = sanitize_string_integer( $value );

	return \sanitize_text_field( $value );
}

/**
 * Sanitize float.
 */
function sanitize_float( $value, $can_be_negative = false ) {
	if ( $can_be_negative ) {
		return round( floatval( $value ), 2 );
	}

	return round( abs( floatval( $value ) ), 2 );
}

/**
 * Sanitize integer.
 */
function sanitize_integer( $value ) {
	return \absint( $value );
}

/**
 * Sanitize boolean.
 *
 * https://github.com/WPTRT/code-examples/blob/master/customizer/sanitization-callbacks.php
 */
function sanitize_boolean( $value ) {
	return isset( $value ) && true == $value ? true : false;
}

/**
 * Sanitize array.
 */
function sanitize_array( $value ) {
	return is_array( $value ) ? $value : array();
}

/**
 * Sanitize value inside an options array.
 */
function sanitize_options( $value = '', $options = array(), $default_value = '' ) {

	$value         = \sanitize_key( $value );
	$options       = sanitize_array( $options );
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
function sanitize_range( $value = 50, $min = 0, $max = 100 ) {

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
function sanitize_range_float( $value = 50, $min = 0, $max = 100, $can_be_negative = false ) {

	$value = sanitize_float( $value, $can_be_negative );
	$min   = sanitize_float( $min, $can_be_negative );
	$max   = sanitize_float( $max, $can_be_negative );

	$value = max( $value, $min );
	$value = min( $value, $max );

	return (string) $value;
}

/**
 * Sanitize color text input for HEX, rgb and rgba.
 *
 * https://stackoverflow.com/a/31245990 | CC BY-SA 3.0
 */
function sanitize_color( $value ) {

	$color          = sanitize_text_field( $value );
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
