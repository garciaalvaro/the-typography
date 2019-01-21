<?php

namespace THETYPOGRAPHY;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

function get_typography_post( $i ) {
	$selector_groups = array(
		array(
			'custom_title'           => true,
			'title'                  => 'Slctr grp',
			'force_styles'           => false,
			'custom_parent_selector' => true,
			'parent_selector'        => '#main',
			'custom_typography'      => false,
			// Selectors
			'selectors' => array(
				array(
					'selector_type'        => 'text',
					'text_selector'        => '.entry-title a',
					'block_name'           => '',
					'block_selector_root'  => '',
					'block_selector_extra' => '',
				),
				array(
					'selector_type'        => 'block',
					'text_selector'        => '',
					'block_name'           => 'core/quote',
					'block_selector_root'  => '',
					'block_selector_extra' => '',
				),
			),
			// Typography
			'custom_font_size'       => false,
			'font_size'              => 15,
			'custom_line_height'     => false,
			'line_height'            => 1.2,
			'custom_letter_spacing'  => true,
			'letter_spacing'         => 3,
			'custom_color'           => false,
			'color'                  => '',
			'custom_font_weight'     => false,
			'font_weight'            => 'normal',
			'custom_font_style'      => false,
			'font_style'             => 'normal',
			'custom_text_transform'  => true,
			'text_transform'         => 'uppercase',
			'custom_text_decoration' => false,
			'text_decoration'        => 'none',
		),
	);

	return array(
		'post_type'   => 'the_typography',
		'post_status' => 'publish',
		'post_title'  => 'test_' . $i,
		'tax_input'   => array(
			'context_type'               => $i % 2 === 0 ? ( $i % 3 === 0 ? 'post_type' : 'front_page' ) : 'all_site',
			'context_post_type'          => $i % 2 === 0 ? ( $i % 3 === 0 ? 'post' : 'page' ) : 'post,page',
			'context_post_type_template' => $i % 2 === 0 ? ( $i % 3 === 0 ? 'index' : 'single' ) : 'index,single',
		),
		'meta_input'   => array(
			'selector_groups' => wp_json_encode( $selector_groups ),
			// Typography
			'custom_font'            => true,
			'font_family'            => $i % 2 === 0 ? ( $i % 3 === 0 ? 'Hind' : 'Open Sans' ) : 'Almendra',
			'font_variant'           => $i % 2 === 0 ? ( $i % 3 === 0 ? '700i' : '400' ) : '600i',
			'custom_font_size'       => true,
			'font_size'              => 35,
			'custom_line_height'     => false,
			'line_height'            => 1.2,
			'custom_letter_spacing'  => false,
			'letter_spacing'         => 0,
			'custom_color'           => true,
			'color'                  => 'rgba(250,0,100,0.87)',
			'custom_font_weight'     => false,
			'font_weight'            => 'normal',
			'custom_font_style'      => false,
			'font_style'             => 'normal',
			'custom_text_transform'  => false,
			'text_transform'         => 'none',
			'custom_text_decoration' => false,
			'text_decoration'        => 'none',
		),
	);
}

function test_back1() {

	$thet = get_option( 'thet', 0 );

	if ( $thet > 3) { return; }

	update_option( 'thet', $thet + 1 );

	for ( $i=0; $i < 200; $i++) {

		$post = get_typography_post( $i );
		wp_insert_post( $post );

	}

}
// add_action( 'wp_head', __NAMESPACE__ . '\test_back1' );


function test_back2() {

	$allposts = get_posts( array( 'post_type' => 'the_typography', 'posts_per_page' => -1 ) );

	foreach ( $allposts as $post ) {
		wp_delete_post( $post->ID, true );
	}
}
// add_action( 'init', __NAMESPACE__ . '\test_back2' );
