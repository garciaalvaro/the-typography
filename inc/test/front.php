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

	$tt = array(
		'aaa' => array('post_id'=>123),
		'bbb' => array('post_id'=>456),
	);

	$qq = array_search( 456, array_column( $tt, 'post_id' ) );

	// $qq = array_keys(array_combine(array_keys($tt), array_column($tt, 'post_id')),456);

	// var_dump(array_keys($tt)[$qq]);
}
