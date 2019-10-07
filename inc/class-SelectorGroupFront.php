<?php

namespace THETYPOGRAPHY;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

/**
 * Class SelectorGroupFront
 */
class SelectorGroupFront {

	use TypographyStyle;

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
			'selectors'    => implode( ',', $css_selectors ),
			'style'        => $this->getCssStyle( $this->style, $this->props['force_styles'] ),
			'force_styles' => $this->props['force_styles'],
		);
	}

	private function castProps() {

		$schema = Schemas::$selector_group;

		$this->props = Utils::castSchema( $this->props, $schema );
	}

	private function setPropsDefaults() {

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
