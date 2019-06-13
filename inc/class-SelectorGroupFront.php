<?php

namespace THETYPOGRAPHY;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

/**
 * Class SelectorGroupFront
 */
class SelectorGroupFront {

	use SetDefaults, CastSchema, TypographyStyle;

	private $props     = array();
	private $style     = array();
	private $selectors = array();

	function __construct( $props = array() ) {

		$this->props = $props;

		$this->castProps();

		$this->setPropsDefaults();

		$this->setStyle();

		$this->setSelectors();
	}

	public function isValid() {

		if ( ! empty( $this->selectors ) ) {
			return true;
		}

		return false;
	}

	public function getCssObject() {

		$is_predefined = '' !== $this->props['_id'];
		$css_selectors = array();

		foreach ( $this->selectors as $selector ) {
			$css_selectors[] =
				$selector->getCssSelector(
					$this->props['parent_selector'],
					$is_predefined
				);
		}

		return array(
			'selectors' => implode( ',', $css_selectors ),
			'style'     => $this->getCssStyle( $this->style )
		);
	}

	private function castProps() {

		$schema = array_merge(
			array(
				'_id'                    => 'id',
				'force_styles'           => 'boolean',
				'force_styles'           => 'boolean',
				'custom_parent_selector' => 'boolean',
				'parent_selector'        => 'text',
				'custom_typography'      => 'boolean',
				'selectors'              => array( '_all' => '_no_cast' ),
			),
			$this->style_schema
		);

		$this->props = $this->castSchema( $this->props, $schema );
	}

	private function setPropsDefaults() {

		$defaults = array_merge(
			array(
				'_id'                    => array(),
				'selectors'              => array(),
				'force_styles'           => false,
				'custom_parent_selector' => false,
				'parent_selector'        => '',
				'custom_typography'      => false,
			),
			$this->style_defaults
		);

		$this->props = $this->setDefaults( $this->props, $defaults );
	}

	private function setStyle() {

		if ( ! $this->props['custom_typography'] ) {
			return;
		}

		$this->style = $this->filterCustom( $this->props, $this->style_keys );
	}

	private function setSelectors() {
		foreach ( $this->props['selectors'] as $selector_props ) {

			$selector = new SelectorFront( $selector_props );

			if ( $selector->isValid() ) {
				$this->selectors[] = $selector;
			}
		}
	}
}
