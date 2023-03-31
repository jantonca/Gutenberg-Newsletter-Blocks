<?php
/**
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
/* Add page templates to a theme directly from the plugin */
//Filter to add templates to the dropdown list of page templates
function newsletter_add_page_template ($templates) {
    $templates['newsletter-template.php'] = 'Newsletter Template';
    return $templates;
    }
add_filter ('theme_page_templates', 'newsletter_add_page_template');
//Redirect template to the plugin directory by using the page_template filter
function newsletter_redirect_page_template ($template) {
    $post = get_post();
    $page_template = get_post_meta( $post->ID, '_wp_page_template', true );
    if ('newsletter-template.php' == basename ($page_template))
        $template = plugin_dir_path( __DIR__ ) . 'templates/newsletter-template.php';
    return $template;
}
add_filter ('page_template', 'newsletter_redirect_page_template');
/* PHP SCRIPTS FOR THE CORE FUNCTIONALITY */
require_once( __DIR__ . '/backend/backend-scripts.php');
/* PHP SCRIPTS FOR THE FRONT-END FUNCTIONALITY */
require_once( __DIR__ . '/frontend/frontend-scripts.php');