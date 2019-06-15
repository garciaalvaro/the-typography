<?php

namespace THETYPOGRAPHY;

// Exit if accessed directly.
if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) { die; }

$option = get_option( 'the_typography' );

if ( ! empty( $option['predefined'] ) ) {

	foreach ( $option['predefined'] as $namespace ) {

		if ( ! empty( $namespace ) ) {

			foreach ( $namespace as $typography ) {

				if ( ! empty( $typography['post_id'] ) ) {

					// Delete predefined posts.
					wp_delete_post( $typography['post_id'], true );
				}
			}
		}
	}
}

// Remove option.
delete_option( 'the_typography' );

// For Multisite
delete_site_option( 'the_typography' );
