<?php
/**
 * Plugin Name: Intermedia Newsletter Blocks
 * Plugin URI: https://www.intermedia.com.au/
 * Description: Plugin for adding Gutenberg Blocks to the WordPress to create newsletters
 * Author: Jose Anton
 * Author URI: https://www.intermedia.com.au/
 * Version: 1.4.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';

/**
 * Admin scripts
 */
require_once plugin_dir_path( __FILE__ ) . 'admin/admin.php';

//Add settings link in plugins listing page
function add_settings_link($links, $file) {
    if ($file == plugin_basename(__FILE__)) {
        $settings_link = '<a href="admin.php?page=intermedia-newsletter-blocks/admin/backend/backend-scripts.php">Settings</a>';
        array_unshift($links, $settings_link);
    }
    return $links;
}
add_filter('plugin_action_links', 'add_settings_link', 10, 2);
