<?php

namespace THETYPOGRAPHY;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

/**
 * Trait Defaults
 */
class Defaults {

	static public $selector_group = array(
		'_id'                    => '',
		'force_styles'           => false,
		'custom_parent_selector' => false,
		'parent_selector'        => '',
		'custom_typography'      => false,
		'selectors'              => array(),
		//
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

	static public $selector = array(
		'selector_type'        => 'text',
		'text_selector'        => '',
		'block_name'           => '',
		'block_title'          => '',
		'block_selector_root'  => '',
		'block_selector_extra' => '',
		'block_element_label'  => '',
	);

	static public $typography = array(
		'is_active'              => true,
		'selector_groups'        => array(),
		//
		'custom_font'            => false,
		'font_family'            => '',
		'font_variant'           => array( '400' ),
		//
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
}
