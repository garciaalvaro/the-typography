<?php

namespace THETYPOGRAPHY;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

/**
 * Trait Schemas
 */
class Schemas {

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
		'font_style'             => 'id',
		'custom_font_weight'     => 'boolean',
		'font_weight'            => 'id',
		'custom_text_transform'  => 'boolean',
		'text_transform'         => 'id',
		'custom_text_decoration' => 'boolean',
		'text_decoration'        => 'id',
	);

	static public $selector = array(
		'_can_be_removed'      => 'boolean',
		'selector_type'        => array(
			'_options'       => array( 'text', 'block' ),
			'_default_value' => 'text',
		),
		'text_selector'        => 'text',
		'block_name'           => 'text',
		'block_title'          => 'text',
		'block_selector_root'  => 'text',
		'block_selector_extra' => 'text',
		'block_element_label'  => 'text',
	);

	static public $typography = array(
		'is_active'              => 'boolean',
		'selector_groups'        => array( '_all' => array( '_all' => 'no_cast' ) ),
		//
		'custom_font'            => 'boolean',
		'font_family'            => 'text',
		'font_variant'           => array( '_all' => 'id' ),
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
		'font_style'             => 'id',
		'custom_font_weight'     => 'boolean',
		'font_weight'            => 'id',
		'custom_text_transform'  => 'boolean',
		'text_transform'         => 'id',
		'custom_text_decoration' => 'boolean',
		'text_decoration'        => 'id',
	);
}
