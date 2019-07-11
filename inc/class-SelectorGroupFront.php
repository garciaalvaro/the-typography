<?php

namespace THETYPOGRAPHY;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

/**
 * Class SelectorGroupFront
 */
class SelectorGroupFront {

	use TypographyStyle;

	public $props      = array();
	private $style     = array();
	private $selectors = array();

	function __construct( $props = array() ) {

		$this->props = $props;

		$this->castProps();

		$this->setSinglePropsDefaults();

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

		$is_predefined   = '' !== $this->props['_id'];
		$css_selectors   = array();
		$parent_selector = true === $this->props['custom_parent_selector']
			? $this->props['parent_selector']
			: '';

		foreach ( $this->selectors as $selector ) {

			$css_selectors[] =
				$selector->getCssSelector(
					$parent_selector,
					$is_predefined
				);
		}

		return array(
			'selectors'    => implode( ',', $css_selectors ),
			'style'        => $this->getCssStyle( $this->style, $this->props['force_styles'] ),
			'force_styles' => $this->props['force_styles'],
		);
	}

	private function castProps() {

		$schema = Schema::$selector_group;

		$this->props = Utils::castSchema( $this->props, $schema );
	}

	private function setSinglePropsDefaults() {

		$defaults = Defaults::$selector_group;

		$this->props = Utils::setDefaults( $this->props, $defaults );
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
