<?php

namespace THETYPOGRAPHY;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

/**
 * Trait SetDefaults
 */
class SetDefaults {

	/**
	 * Return an array of props with default values for non-existent props.
	 */
	static public function setDefaults( $props = array(), $defaults = array() ) {
		return shortcode_atts( $defaults, $props );
	}
}
