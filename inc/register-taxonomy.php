<?php

namespace THETYPOGRAPHY;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

function register_the_typography_taxonomy() {

	register_taxonomy( 'context_type', 'the_typography', array(
		'show_in_rest' => true,
		'public'       => false,
		'labels'       => array(
			'name' => 'Context Type',
		),
		'capabilities' => array(
			'manage_terms' => 'edit_theme_options',
			'edit_terms'   => 'edit_theme_options',
			'delete_terms' => 'edit_theme_options',
			'assign_terms' => 'edit_theme_options',
		),
	) );
	register_taxonomy( 'context_post_type', 'the_typography', array(
		'show_in_rest' => true,
		'public'       => false,
		'labels'       => array(
			'name' => 'Post Type',
		),
		'capabilities' => array(
			'manage_terms' => 'edit_theme_options',
			'edit_terms'   => 'edit_theme_options',
			'delete_terms' => 'edit_theme_options',
			'assign_terms' => 'edit_theme_options',
		),
	) );
	register_taxonomy( 'context_post_type_template', 'the_typography', array(
		'show_in_rest' => true,
		'public'       => false,
		'labels'       => array(
			'name' => 'Post Type Template',
		),
		'capabilities' => array(
			'manage_terms' => 'edit_theme_options',
			'edit_terms'   => 'edit_theme_options',
			'delete_terms' => 'edit_theme_options',
			'assign_terms' => 'edit_theme_options',
		),
	) );
}
add_action( 'init', __NAMESPACE__ . '\register_the_typography_taxonomy' );


function register_the_typography_taxonomy_terms() {

	$terms = array(
		array(
			'taxonomy' => 'context_type',
			'name'     => 'All site',
			'slug'     => 'all_site',
		),
		array(
			'taxonomy' => 'context_type',
			'name'     => 'Post type',
			'slug'     => 'post_type',
		),
		array(
			'taxonomy' => 'context_type',
			'name'     => 'Front page',
			'slug'     => 'front_page',
		),
		array(
			'taxonomy' => 'context_type',
			'name'     => '404 page',
			'slug'     => '404_page',
		),
		array(
			'taxonomy' => 'context_post_type_template',
			'name'     => 'Index',
			'slug'     => 'index',
		),
		array(
			'taxonomy' => 'context_post_type_template',
			'name'     => 'Single',
			'slug'     => 'single',
		),
	);

	foreach ( $terms as $term ) {

		$term_id = term_exists( $term['name'], $term['taxonomy'] );

		if ( 0 !== $term_id && null !== $term_id ) {
			continue;
		}

		wp_insert_term(
			$term['name'],
			$term['taxonomy'],
			array(
				'slug' => $term['slug'],
			)
		);
	}
}
