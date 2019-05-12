<?php

namespace THETYPOGRAPHY;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

function add_font( $fonts_array = array(), $props = array() ) {

	if (
		! empty( $props['custom_font'] ) &&
		! empty( $props['font_family'] ) &&
		isset( $props['font_variant'] )
	) {

		$family  = str_replace( '_', '+', $props['font_family'] );
		$variant = ! empty( $props['font_variant'] )
			? $props['font_variant']
			: array( '400' );

		$fonts_array[ $family ] = isset( $fonts_array[ $family ] )
			? array_merge( $fonts_array[ $family ], $variant )
			: $variant;

		// Remove repeated variants.
		$fonts_array[ $family ] = array_unique( $fonts_array[ $family ] );
	}

	return $fonts_array;
}

function prepare_font_family( $props = array() ) {

	if (
		! empty( $props['font_family'] ) &&
		true === $props['custom_font']
	) {
		$props['font_family'] = str_replace( '_', ' ', $props['font_family'] );
		$props['font_family'] = "'" . $props['font_family'] . "'";
	} else {
		unset( $props['font_family'] );
	}

	return $props;
}

function get_typography_meta( $id = 0 ) {

	return array(
		// Selector groups
		'selector_groups'        => json_decode( get_post_meta( $id, 'selector_groups', true ), true ),
		// Font
		'custom_font'            => get_post_meta( $id, 'custom_font', true ),
		'font_family'            => get_post_meta( $id, 'font_family', true ),
		'font_variant'           => get_post_meta( $id, 'font_variant', false ),
		// Styles
		'custom_color'           => get_post_meta( $id, 'custom_color', true ),
		'color'                  => get_post_meta( $id, 'color', true ),
		'custom_font_size'       => get_post_meta( $id, 'custom_font_size', true ),
		'font_size'              => get_post_meta( $id, 'font_size', true ),
		'custom_line_height'     => get_post_meta( $id, 'custom_line_height', true ),
		'line_height'            => get_post_meta( $id, 'line_height', true ),
		'custom_letter_spacing'  => get_post_meta( $id, 'custom_letter_spacing', true ),
		'letter_spacing'         => get_post_meta( $id, 'letter_spacing', true ),
		'custom_font_style'      => get_post_meta( $id, 'custom_font_style', true ),
		'font_style'             => get_post_meta( $id, 'font_style', true ),
		'custom_font_weight'     => get_post_meta( $id, 'custom_font_weight', true ),
		'font_weight'            => get_post_meta( $id, 'font_weight', true ),
		'custom_text_transform'  => get_post_meta( $id, 'custom_text_transform', true ),
		'text_transform'         => get_post_meta( $id, 'text_transform', true ),
		'custom_text_decoration' => get_post_meta( $id, 'custom_text_decoration', true ),
		'text_decoration'        => get_post_meta( $id, 'text_decoration', true ),
	);
}

function generate_selectors_string( $style_array = array() ) {

	$selectors_array = array();
	$parent_selector =
		empty( $style_array['custom_parent_selector'] ) || empty( $style_array['parent_selector'] )
			? ''
			: $style_array['parent_selector'] . ' ';

	foreach ( $style_array['selectors'] as $selector ) {

		if (
			'text' === $selector['selector_type'] &&
			! empty( $selector['text_selector'] )
		) {

			$selectors_array[] = $parent_selector . $selector['text_selector'];

		} elseif (
			'block' === $selector['selector_type'] &&
			! empty( $selector['block_selector_root'] )
		) {

			$selector_string = empty( $selector['block_selector_extra'] )
				? $selector['block_selector_root']
				: $selector['block_selector_root'] . ' ' . $selector['block_selector_extra'];

			$selectors_array[] = $parent_selector . $selector_string;
		}
	}

	return implode( ',', $selectors_array );
}

function add_style( $typography_props = array() ) {

	if ( empty( $typography_props['selector_groups'] ) ) {
		return array();
	}

	$style = array();

	foreach ( $typography_props['selector_groups'] as $group_props ) {

		if ( empty( $group_props['selectors'] ) ) {
			continue;
		}

		$group_props = clean_style_props( $group_props );

		// Merge root style with the group style
		$group_props['styles'] =
			array_merge( $typography_props['styles'], $group_props['styles'] );

		$style[] = $group_props;
	}

	return $style;
}

function clean_style_props( $props = array() ) {

	$style_keys = array(
		'font_family',
		'color',
		'font_size',
		'line_height',
		'letter_spacing',
		'font_style',
		'font_weight',
		'text_transform',
		'text_decoration',
	);

	$props['styles'] = array();

	foreach ( $props as $prop_key => $prop_value ) {
		if ( ! in_array( $prop_key, $style_keys ) ) {
			continue;
		}

		if ( 'font_family' === $prop_key ) {
			$props['styles'][ $prop_key ] = $prop_value;
			unset( $props[ $prop_key ] );

			continue;
		}

		if ( true === $props[ 'custom_' . $prop_key ] ) {
			$props['styles'][ $prop_key ] = $prop_value;

		}

		unset( $props[ $prop_key ] );
		unset( $props[ 'custom_' . $prop_key ] );
	}

	return $props;
}

function generate_styles_string( $groups = array() ) {

	$styles_string = '';

	foreach ( $groups as $group ) {

		$style_string = '';
		$important    = $group['force_styles'] ? '!important' : '';

		foreach ( $group['styles'] as $key => $value ) {

			$value = 'font_size' === $key || 'letter_spacing' === $key
				? $value . 'px'
				: $value;

			$key = str_replace( '_', '-', $key );

			$style_string .= $key . ':' . $value . $important . ';';

		}

		$selectors_string = generate_selectors_string( $group );

		if ( !empty( $selectors_string ) ) {
			$styles_string = $selectors_string . '{' . $style_string . '}' . $styles_string;
		}
	}

	return $styles_string;
}

function generate_fonts_string( $fonts_array = array() ) {

	$fonts = array();

	foreach ( $fonts_array as $family => $variants ) {
		$fonts[] = $family . ':' . implode( ',', $variants );
	}

	return implode( '|', $fonts );
}
