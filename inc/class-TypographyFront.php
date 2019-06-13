<?php

namespace THETYPOGRAPHY;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

/**
 * Class TypographyFront
 */
class TypographyFront {

	use SetDefaults, CastSchema, TypographyStyle;

	private $props           = array();
	private $style           = array();
	private $selector_groups = array();

	function __construct( $post_id = 0 ) {

		$this->setProps( $post_id );

		$this->castProps();

		$this->setPropsDefaults();

		$this->setStyle();

		$this->setSelectorGroups();
	}

	public function isValid() {

		if ( ! empty( $this->selector_groups ) ) {
			return true;
		}

		return false;
	}

	public function getFont() {

		if (
			! empty( $this->style['font_family'] ) &&
			! empty( $this->style['font_variant'] )
		) {
			$family = str_replace( '_', '+', $this->style['font_family'] );

			return array(
				'family'   => $family,
				'variants' => $this->style['font_variant'],
			);
		}

		return null;
	}

	public function getCssString() {

		$css_array = array();
		$css_root  = array(
			'selectors' => array(),
			'style'     => $this->getCssStyle( $this->style ),
		);

		foreach ( $this->selector_groups as $group ) {

			$css_object = $group->getCssObject();

			$css_root['selectors'][] = $css_object['selectors'];

			if ( ! empty( $css_object['style'] ) ) {

				$css_array[] = $css_object;

			}
		}

		$css_root['selectors'] = implode( ',', $css_root['selectors'] );

		if ( ! empty( $css_root['style'] ) ) {

			array_unshift( $css_array, $css_root );

		}

		$css_string = array();

		foreach ( $css_array as $css_object ) {

			$css_string[] = $css_object['selectors'] . '{' . $css_object['style'] . '}';

		}

		return implode( '', $css_string );
	}

	private function setProps( $post_id ) {

		// Meta.
		$post_meta = get_post_meta( $post_id );

		$meta_keys = array(
			'is_active',
			'selector_groups',
			'custom_font',
			'font_family',
			'font_variant',
			'custom_color',
			'color',
			'custom_font_size',
			'font_size',
			'custom_line_height',
			'line_height',
			'custom_letter_spacing',
			'letter_spacing',
			'custom_font_style',
			'font_style',
			'custom_font_weight',
			'font_weight',
			'custom_text_transform',
			'text_transform',
			'custom_text_decoration',
			'text_decoration',
		);

		foreach ( $meta_keys as $key ) {
			if ( ! isset( $post_meta[ $key ] ) ) {
				continue;
			}

			if ( 'selector_groups' === $key ) {
				$this->props['selector_groups'] =
					json_decode( $post_meta[ $key ][0], true );

				continue;
			}

			if ( 'font_variant' === $key ) {
				$this->props[ $key ] = $post_meta[ $key ];

				continue;
			}

			$this->props[ $key ] = $post_meta[ $key ][0];
		}
	}

	private function castProps() {

		$schema = array_merge(
			array(
				'selector_groups' => array( '_all' => '_no_cast' ),
				'custom_font'     => 'boolean',
				'font_family'     => 'text',
				'font_variant'    => array( '_all' => 'id' ),
			),
			$this->style_schema
		);

		$this->props = $this->castSchema( $this->props, $schema );
	}

	private function setPropsDefaults() {

		$defaults = array_merge(
			array(
				'selector_groups' => array(),
				'custom_font'     => false,
				'font_family'     => '',
				'font_variant'    => array( '400' ),
			),
			$this->style_defaults
		);

		$this->props = $this->setDefaults( $this->props, $defaults );
	}

	private function setStyle() {

		$style_keys = array_merge(
			array(
				'font_family',
				'font_variant',
			),
			$this->style_keys
		);

		$this->style = $this->filterCustom( $this->props, $style_keys );
	}

	private function setSelectorGroups() {
		foreach ( $this->props['selector_groups'] as $group_props ) {

			$group = new SelectorGroupFront( $group_props );

			if ( $group->isValid() ) {
				$this->selector_groups[] = $group;
			}
		}
	}
}
