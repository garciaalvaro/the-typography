<?php
/**
 * Plugin Name: _PLUGIN_NAME_
 * Plugin URI: _PLUGIN_URI_
 * Description: _PLUGIN_DESCRIPTION_
 * Author: _PLUGIN_AUTHOR_
 * Version: _PLUGIN_VERSION_
 * License: GPL3+
 * License URI: http://www.gnu.org/licenses/gpl-3.0.txt
 */

namespace THETYPOGRAPHY;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

if ( ! defined( __NAMESPACE__ . '\PLUGIN_VERSION' ) ) {
	define( __NAMESPACE__ . '\PLUGIN_VERSION', '_PLUGIN_VERSION_' );
}
if ( ! defined( __NAMESPACE__ . '\PLUGIN_NAME' ) ) {
	define( __NAMESPACE__ . '\PLUGIN_NAME', 'the-typography' );
}
if ( ! defined( __NAMESPACE__ . '\BUILD_DIR' ) ) {
	define( __NAMESPACE__ . '\BUILD_DIR', plugins_url( 'build/', __FILE__ ) );
}
if ( ! defined( __NAMESPACE__ . '\INC_DIR' ) ) {
	define( __NAMESPACE__ . '\INC_DIR', plugin_dir_path( __FILE__ ) . 'inc/' );
}
if ( ! defined( __NAMESPACE__ . '\PLUGIN_DIR' ) ) {
	define( __NAMESPACE__ . '\PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
}

// Utils.
require_once INC_DIR . 'util-sanitize.php';
require_once INC_DIR . 'util-cast_schema.php';

// Core.
require_once INC_DIR . 'core-typography.php';

// Register.
require_once INC_DIR . 'register-customizer.php';
require_once INC_DIR . 'register-enqueue_the_typography.php';
require_once INC_DIR . 'register-enqueue.php';
require_once INC_DIR . 'register-cpt.php';
require_once INC_DIR . 'register-taxonomy.php';
require_once INC_DIR . 'register-meta.php';

// DEV_start
require_once INC_DIR . '_test-back.php';
require_once INC_DIR . '_test-front.php';
// DEV_end
// PRO_start
require_once PLUGIN_DIR . 'pro/the-typography-pro.php';
// PRO_end

register_activation_hook( __FILE__, __NAMESPACE__ . '\register_the_typography_cpt' );
register_activation_hook( __FILE__, __NAMESPACE__ . '\register_the_typography_taxonomy' );
register_activation_hook( __FILE__, __NAMESPACE__ . '\register_the_typography_taxonomy_terms' );
