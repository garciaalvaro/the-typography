<?php

namespace THETYPOGRAPHY;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

/**
 * Class TypographyFront
 */
class TypographyFront {

	use TypographyStyle;

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

	public function isActive() {
		return $this->props['is_active'];
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
		$css_root_forced = array(
			'selectors' => array(),
			'style'     => $this->getCssStyle( $this->style, true ),
		);

		foreach ( $this->selector_groups as $group ) {

			$css_object = $group->getCssObject();

			if ( $css_object['force_styles'] ) {
				$css_root_forced['selectors'][] = $css_object['selectors'];
			} else {
				$css_root['selectors'][] = $css_object['selectors'];
			}

			if ( ! empty( $css_object['style'] ) ) {

				$css_array[] = $css_object;

			}
		}

		$css_root['selectors']        = implode( ',', $css_root['selectors'] );
		$css_root_forced['selectors'] = implode( ',', $css_root_forced['selectors'] );

		if ( ! empty( $css_root['selectors'] ) && ! empty( $css_root['style'] ) ) {
			array_unshift( $css_array, $css_root );
		}

		if ( ! empty( $css_root_forced['selectors'] ) && ! empty( $css_root_forced['style'] ) ) {
			array_unshift( $css_array, $css_root_forced );
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
			Schemas::$typography,
			array(
				'is_active'       => 'boolean',
				'selector_groups' => array( '_all' => 'no_cast' ),
				'custom_font'     => 'boolean',
				'font_family'     => 'text',
				'font_variant'    => array( '_all' =>
					array(
						'_options' => array(
							'100', '100i', '200', '200i', '300', '300i',
							'400', '400i', '500', '500i', '600', '600i',
							'700', '700i', '800', '800i', '900', '900i',
						),
						'_default_value' => '400',
					),
				),
			)
		);

		$this->props = Utils::castSchema( $this->props, $schema );
	}

	private function setPropsDefaults() {

		$defaults = Defaults::$typography;

		$this->props = Utils::setDefaults( $this->props, $defaults );
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
