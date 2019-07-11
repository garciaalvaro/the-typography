<?php

namespace THETYPOGRAPHY;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

/**
 * Class SelectorFront
 */
class SelectorFront {

	public $props = array();

	function __construct( $props = array() ) {

		$this->props = $props;

		$this->castProps();

		$this->setSinglePropsDefaults();
	}

	public function isValid() {

		if (
			! empty( $this->props['block_selector_root'] ) ||
			! empty( $this->props['text_selector'] )
		) {
			return true;
		}

		return false;
	}

	public function getCssSelector( $parent_selector = '', $group_is_predefined = false ) {

		$parent_selector = ! empty( $parent_selector ) ? $parent_selector . ' ' : '';

		if ( ! $group_is_predefined || ! $this->props['_can_be_removed'] ) {

			return $this->generateSelector( $parent_selector );
		}

		return $this->generateSelector();
	}

	private function generateSelector( $parent_selector = '' ) {

		if ( ! empty( $this->props['text_selector'] ) ) {
			return $parent_selector . $this->props['text_selector'];
		}

		$selector = empty( $this->props['block_selector_extra'] )
			? $this->props['block_selector_root']
			: $this->props['block_selector_root'] . ' ' . $this->props['block_selector_extra'];

		return $parent_selector . $selector;
	}

	private function castProps() {

		$schema = array(
			'_can_be_removed'      => 'boolean',
			'text_selector'        => 'text',
			'block_selector_root'  => 'text',
			'block_selector_extra' => 'text',
		);

		$this->props = Utils::castSchema( $this->props, $schema );
	}

	private function setSinglePropsDefaults() {

		$defaults = array(
			'_can_be_removed'      => true,
			'text_selector'        => '',
			'block_selector_root'  => '',
			'block_selector_extra' => '',
		);

		$this->props = Utils::setDefaults( $this->props, $defaults );
	}

	private function setSelectors() {

		foreach ( $this->props['selectors'] as $selector ) {
			$this->selectors[] = new SelectorFront( $selector );
		}
	}
}
