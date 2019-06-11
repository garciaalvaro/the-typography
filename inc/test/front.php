<?php

namespace THETYPOGRAPHY;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

add_filter( 'wp_head', __NAMESPACE__ . '\test_front' );
function test_front() {

	// $data = register_my_typography();
	// $data = prepare_groups( $data );
	// $data='-123';
	// $data=(integer)$data;
	// $data = (string)round( floatval( $data ), 2 );

	$qq = array('aa'=>123,'bb'=>456);

	var_dump($qq);

	$qq = array_merge(array('aa'=>789),$qq);

	// var_dump($qq);

}
