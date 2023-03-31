<?php
/**
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
function admin_settings_enqueue_script() {
	wp_enqueue_style(
		'intermedia_newsletter_blocks_admin_settings_style', // Handle.
		plugins_url( 'css/admin-settings.css', dirname( __FILE__ ) ) // Block editor CSS.
	);
}
add_action('admin_enqueue_scripts', 'admin_settings_enqueue_script');
/* Filters the allowed block types for the editor */
add_filter( 'allowed_block_types', 'newsletter_allowed_block_types', 10, 2 );
function newsletter_allowed_block_types( $allowed_blocks, $post ) {
    $pagetemplate = get_post_meta( $post->ID, '_wp_page_template', true );
	if( $post->post_type === 'page' && $pagetemplate==='newsletter-template.php' ) {
        $allowed_blocks = array(
            'core/block',
            'core/group',
            'core/html',
            'core/paragraph',
            'core/heading',
            'core/list',
            'core/shortcode',
            'core/button',
            'cgb/intermedia-newsletter-blocks-table',
            'cgb/intermedia-newsletter-blocks-table-image',
            'cgb/intermedia-newsletter-blocks-table-divider',
            'cgb/intermedia-newsletter-blocks-post',
            'cgb/intermedia-newsletter-blocks-post-feed',
            //'cgb/intermedia-newsletter-blocks-event',
            'cgb/intermedia-newsletter-blocks-next-events',
            'cgb/intermedia-newsletter-blocks-table-polar-ads',
            'cgb/intermedia-newsletter-blocks-polar-sponsor-content',
        );
	}
	return $allowed_blocks;
}
/* DISPLAY BACKEND SETTINGS, MENUS AND VARIABLES */
// create custom plugin settings menu
add_action('admin_menu', 'intermedia_newsletter_blocks_menu');
function intermedia_newsletter_blocks_menu() {
    //create new top-level menu
    add_menu_page (
        'Intermedia Newsletter Blocks', 
        'Newsletter Settings', 
        'administrator', 
        __FILE__,
        'intermedia_display_newsletter_blocks_settings_page' , 
        'dashicons-email-alt'
    );
    //call register settings function
    add_action( 'admin_init', 'register_intermedia_newsletter_blocks_settings' );
}
function register_intermedia_newsletter_blocks_settings() {
    //register our settings
    register_setting( 'intermedia-newsletter-blocks-settings-group', 'amount_newsletters' );
    for ($x = 1; $x <= get_option('amount_newsletters'); $x++) {
        register_setting( 'intermedia-newsletter-blocks-settings-group', 'name_newsletter_'.$x );
        register_setting( 'intermedia-newsletter-blocks-settings-group', 'positions_newsletter_'.$x );
    }
}
require_once( __DIR__ . '/backend-display.php');
/* DISPLAY METABOXES IN POST AND EVENTS TO SELECT THE POSITIONS FOR THE NEWSLETTER */
function display_newsletter_blocks_meta_box() {
    $screens = prefix_get_post_types();
    add_meta_box(
        'newsletter_blocks',
        __( 'Newsletter position', 'intermedia' ),
        'display_newsletter_blocks_meta_box_callback',
        $screens,
        'side',
        'low'
    );

}
add_action( 'add_meta_boxes', 'display_newsletter_blocks_meta_box' );
// SAVE THE DATA FOR THE METABOXES
function newsletter_blocks_meta_box_save_postdata($post_id) {
    if ( filter_input_array( INPUT_POST )) {
        if (array_key_exists( 'newsletter_positions', filter_input_array( INPUT_POST ) ) ) {
            $newsletter_position = filter_input( INPUT_POST, 'newsletter_positions' );
            update_post_meta(
                $post_id,
                'intermedia_newsletter_position',
                $newsletter_position
            );
        }
    }
}
add_action('save_post', 'newsletter_blocks_meta_box_save_postdata');
/*******************************add a column in the wp_list_table of the admin area***********************************************/
/**
* Add new columns to the post table
*
* @param Array $columns - Current columns on the list post and events CPT
*/
function add_new_columns_newsletter($columns){
    $column_meta = array( 'newsletter_position' => 'Newsletter Position' );
    $columns = array_slice( $columns, 0, 6, true ) + $column_meta + array_slice( $columns, 6, NULL, true );
    return $columns;
}
// Register the columns as sortable
function register_sortable_columns_newsletter( $columns ) {
    $columns['newsletter_position'] = 'newsletter_position';
    return $columns;
}
//Add filter to the request to make the hits sorting process numeric, not string
add_filter( 'request', 'hits_column_orderby_newsletter' );
function hits_column_orderby_newsletter( $vars ) {
    if ( isset( $vars['orderby'] ) && 'newsletter_position' == $vars['orderby'] ) {
        $vars = array_merge( $vars, array(
            'meta_key' => 'intermedia_newsletter_position',
            'orderby' => 'meta_value'
        ) );
    }
    return $vars;
}
/**
* Get an Array of CPT that are shown in REST API
*
* @param  
*
* @return Data array
*/
function prefix_get_post_types() {
    $post_types = get_post_types(
        array(
            'public'       => true,
            'show_in_rest' => true,
        ), 'objects'
    );
    $posts = array();
    foreach ($post_types as $post_type) {
        $posts[] = $post_type->name;
    }
    return $posts;
}
/**
* Display data in new columns
*
* @param  $column Current column
*
* @return Data for the column
*/
function custom_columns_newsletter ($column) {
    global $post;
    switch ( $column ) {
        case 'newsletter_position':
            $intermedia_newsletter_position = get_post_meta( $post->ID, 'intermedia_newsletter_position', true );
            echo $intermedia_newsletter_position;
        break;
    }
}
function setup_cpt_custom_columns() {
    $cpt_registered = prefix_get_post_types();
    //Filter to show all kind of CPT in custom column newsletter_position
    add_action( 'manage_posts_custom_column' , 'custom_columns_newsletter' );
	foreach ($cpt_registered as $type) {
        add_filter( 'manage_edit-'.$type.'_columns',  'add_new_columns_newsletter' );
        add_filter( 'manage_edit-'.$type.'_sortable_columns', 'register_sortable_columns_newsletter' );
        if($type === 'page') {
            add_action( 'manage_'.$type.'_posts_custom_column' , 'custom_columns_newsletter' );
        }
	}
}
add_action( 'init', 'setup_cpt_custom_columns' );