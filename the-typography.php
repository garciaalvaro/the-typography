<?php
/**
 * Plugin Name: The Typography for Gutenberg
 * Plugin URI: https://wordpress.org/plugins/the-typography/
 * Description: Add Typography to your Gutenberg site using Google Fonts.
 * Author: melonpan
 * Version: 1.1.0
 * License: GPL3+
 * License URI: http://www.gnu.org/licenses/gpl-3.0.txt
 */

namespace THETYPOGRAPHY;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

if ( ! defined( __NAMESPACE__ . '\PLUGIN_VERSION' ) ) {
	define( __NAMESPACE__ . '\PLUGIN_VERSION', '1.1.0' );
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
require_once INC_DIR . 'utils-CastArray.php';
require_once INC_DIR . 'utils-Sanitize.php';
require_once INC_DIR . 'utils-CastSchema.php';
require_once INC_DIR . 'utils-SetDefaults.php';
require_once INC_DIR . 'utils-Utils.php';

// Traits.
require_once INC_DIR . 'trait-TypographyStyle.php';

// Classes.
require_once INC_DIR . 'class-LoadTypographies.php';
require_once INC_DIR . 'class-SelectorFront.php';
require_once INC_DIR . 'class-SelectorGroupFront.php';
require_once INC_DIR . 'class-TypographyFront.php';

// Register.
require_once INC_DIR . 'register-customizer.php';
require_once INC_DIR . 'register-load_typographies.php';
require_once INC_DIR . 'register-enqueue.php';
require_once INC_DIR . 'register-cpt.php';
require_once INC_DIR . 'register-taxonomy.php';
require_once INC_DIR . 'register-meta.php';

// DEV_start
require_once INC_DIR . 'test/back.php';
require_once INC_DIR . 'test/front.php';
// DEV_end
// PRO_start
require_once PLUGIN_DIR . 'pro/the-typography-pro.php';
// PRO_end

register_activation_hook( __FILE__, __NAMESPACE__ . '\register_the_typography_cpt' );
register_activation_hook( __FILE__, __NAMESPACE__ . '\register_the_typography_taxonomy' );
register_activation_hook( __FILE__, __NAMESPACE__ . '\register_the_typography_taxonomy_terms' );
