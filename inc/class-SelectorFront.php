<?php

namespace THETYPOGRAPHY;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

/**
 * Class SelectorFront
 */
class SelectorFront {

	private $props = array();

	function __construct( $props = array() ) {

		$this->props = $props;

		$this->castProps();

		$this->setPropsDefaults();
	}

	public function isValid() {

		if (
			'text' === $this->props['selector_type'] &&
			! empty( $this->props['text_selector'] )
		) {
			return true;
		}

		if (
			'block' === $this->props['selector_type'] &&
			! empty( $this->props['block_selector_root'] )
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

		if ( 'text' === $this->props['selector_type'] ) {
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
			'selector_type'        => 'id',
			'text_selector'        => 'text',
			'block_name'           => 'text',
			'block_title'          => 'text',
			'block_selector_root'  => 'text',
			'block_selector_extra' => 'text',
			'block_element_label'  => 'text',
		);

		$this->props = Utils::castSchema( $this->props, $schema );
	}

	private function setPropsDefaults() {

		$defaults = array(
			'_can_be_removed'      => true,
			'selector_type'        => '',
			'text_selector'        => '',
			'block_name'           => '',
			'block_title'          => '',
			'block_selector_root'  => '',
			'block_selector_extra' => '',
			'block_element_label'  => ''
		);

		$this->props = Utils::setDefaults( $this->props, $defaults );
	}

	private function setSelectors() {
		foreach ( $this->props['selectors'] as $selector ) {
			$this->selectors[] = new SelectorFront( $selector );
		}
	}
}
