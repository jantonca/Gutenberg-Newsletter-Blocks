<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * Assets enqueued:
 * 1. blocks.style.build.css - Frontend + Backend.
 * 2. blocks.build.js - Backend.
 * 3. blocks.editor.build.css - Backend.
 *
 * @uses {wp-blocks} for block type registration & related functions.
 * @uses {wp-element} for WP Element abstraction — structure of blocks.
 * @uses {wp-i18n} to internationalize the block's text.
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function intermedia_newsletter_blocks_assets() { // phpcs:ignore
	// Register block styles for both frontend + backend.
	wp_register_style(
		'intermedia-newsletter-blocks-css', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
		array( 'wp-editor' ), // Dependency to include the CSS after it.
		null // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' ) // Version: File modification time.
	);

	// Register block editor script for backend.
	wp_register_script(
		'intermedia-newsletter-blocks-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ), // Dependencies, defined above.
		null, // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: filemtime — Gets file modification time.
		true // Enqueue the script in the footer.
	);

	// Register block editor styles for backend.
	wp_register_style(
		'intermedia-newsletter-blocks-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
		null // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: File modification time.
	);

	// WP Localized globals. Use dynamic PHP stuff in JavaScript via `cgbGlobal` object.
	wp_localize_script(
		'intermedia-newsletter-blocks-js',
		'intermediaNewsletterBlocksGlobal', // Array containing dynamic data for a JS Global.
		[
			'pluginDirPath' => plugin_dir_path( __DIR__ ),
			'pluginDirUrl'  => plugin_dir_url( __DIR__ ),
			// Add more data here that you want to access from `cgbGlobal` object.
			'newsletter_positions' => get_positions_options(),
			'image_crops' => get_image_crops(),
			'ai1ec_terms' => get_terms_ai1ec_event(),
			'cpt_registered' => get_post_types_registered(),
		]
	);

	/**
	 * Register Gutenberg block on server-side.
	 *
	 * Register the block on server-side to ensure that the block
	 * scripts and styles for both frontend and backend are
	 * enqueued when the editor loads.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type#enqueuing-block-scripts
	 * @since 1.16.0
	 */
	register_block_type(
		'cgb/intermedia-newsletter-blocks', array(
			// Enqueue blocks.style.build.css on both frontend & backend.
			'style'         => 'intermedia-newsletter-blocks-css',
			// Enqueue blocks.build.js in the editor only.
			'editor_script' => 'intermedia-newsletter-blocks-js',
			// Enqueue blocks.editor.build.css in the editor only.
			'editor_style'  => 'intermedia-newsletter-blocks-editor-css',
		)
	);
	//REGISTER BLOCK FOR POST AND CPT
	register_block_type(
		'cgb/intermedia-newsletter-blocks-post', array(
		// Callback function for the dynamic block front-end
		'render_callback' => 'render_dynamic_table_post',
		)
	);
	//REGISTER BLOCK FOR POST AND CPT
	register_block_type(
		'cgb/intermedia-newsletter-blocks-post-feed', array(
		// Callback function for the dynamic block front-end
		'render_callback' => 'render_dynamic_table_post_feed',
		)
	);
	//REGISTER BLOCK FOR EVENTS
	register_block_type(
		'cgb/intermedia-newsletter-blocks-next-events', array(
		// Callback function for the dynamic block front-end
		'render_callback' => 'render_dynamic_table_next_events',
		)
	);
	//REGISTER BLOCK FOR POLAR ADS
	register_block_type(
		'cgb/intermedia-newsletter-blocks-table-polar-ads', array(
		// Callback function for the dynamic block front-end
		'render_callback' => 'render_dynamic_table_polar_ads',
		)
	);
	//REGISTER BLOCK FOR POLAR SPONSOR CONTENT
	register_block_type(
		'cgb/intermedia-newsletter-blocks-polar-sponsor-content', array(
		// Callback function for the dynamic block front-end
		'render_callback' => 'render_dynamic_table_polar_sponsor_content',
		)
	);	
}
/* Creating a block category: Newsletter */
function newsletter_block_category( $categories, $post ) {
	return array_merge(
		$categories,
		array(
			array(
				'slug' => 'newsletter-blocks',
				'title' => __( 'Newsletter Blocks', 'newsletter-blocks' ),
			),
		)
	);
}
add_filter( 'block_categories', 'newsletter_block_category', 10, 2);
// Hook: Block assets.
add_action( 'init', 'intermedia_newsletter_blocks_assets' );
/* REGISTER METAFIELDS FOR NEWSLETTER POSITIONS */
function register_meta_positions_query() {
	$cpt_registered = prefix_get_post_types();
	foreach ($cpt_registered as $post_type) {
		register_meta($post_type, 'intermedia_newsletter_position', [
			'show_in_rest' => true,
			'single' => true,
			'type' => 'string'
		]);
		add_filter( 'rest_'.$post_type.'_query', function( $args, $request ){
			if ( $meta_key = $request->get_param( 'metaKey' ) ) {
				$args['meta_key'] = $meta_key;
				$args['meta_value'] = $request->get_param( 'metaValue' );
			}
			return $args;
		}, 10, 2 );
	}
}
add_action( 'rest_api_init', 'register_meta_positions_query' );
//add positions to global window variable
function get_positions_options() {
	if( get_option('amount_newsletters') ){
        
        $newsletter_positions = ['Select a position...'];

        for ( $x = 1; $x <= get_option('amount_newsletters'); $x++ ) {

            $name_newsletter_raw = get_option('name_newsletter_'.$x);
            $name_newsletter = str_replace(' ', '_', $name_newsletter_raw);
            $name_newsletter = strtolower($name_newsletter);
            $name_newsletter = preg_replace( '/[^A-Za-z0-9\-]/', '', $name_newsletter );

            for ( $y = 1; $y <= get_option('positions_newsletter_'.$x); $y++ ) {
                array_push($newsletter_positions, $name_newsletter.'_position_'.$y);
            }
            for ( $y = 1; $y <= get_option('event_positions_newsletter_'.$x); $y++ ) {
                array_push($newsletter_positions, $name_newsletter.'_event_position_'.$y);
            }
        }
        
        return $newsletter_positions;
        
	}
	$newsletter_positions = ['No positions created'];
	return $newsletter_positions;
}
// /* GET IMAGE CROPS */
function get_image_crops() {
    $output = get_intermediate_image_sizes();
    return $output;
}
/* GET ALL TERMS OF AILEC EVENTS */
function get_terms_ai1ec_event() {

	$terms_cats = get_terms( array(
		'taxonomy' => 'events_categories',
		'hide_empty' => false,
	) );
	
	if( is_wp_error( $terms_cats )  ) {
		return;
	}

	if( empty( $terms_cats ) || is_wp_error( $terms_cats ) ) {
		$terms_cat[] = array (
			'value' => '',
			'label' => 'No categories created...',
		);
	} else {
		foreach ( $terms_cats as $cat ) {
			$terms_cat[] = array (
				'value' => '',
				'label' => 'Select the category...',
			);
			array_push(
				$terms_cat, array (
					'value' => $cat->term_id,
					'label' => $cat->name,
					)
			);
		}
	}

	$terms_tags = get_terms( array(
		'taxonomy' => 'events_tags',
		'hide_empty' => false,
	) );
	
	if( empty( $terms_tags ) || is_wp_error( $terms_cats )  ) {
		$terms_tag[] = array (
			'value' => '',
			'label' => 'No tags created...',
		);
	} else {
		foreach ( $terms_tags as $tag ) {
			$terms_tag[] = array (
				'value' => '',
				'label' => 'Select the tag...',
			);
			array_push(
				$terms_tag, array (
					'value' => $tag->term_id,
					'label' => $tag->name,
					)
			);
		}
	}
	$output = array(
		'categories' => $terms_cat,
		'tags' => $terms_tag
	);

	return $output;

}
/* GET ALL CPT REGISTERED IN REST API */
function get_post_types_registered() {

	$post_types = get_post_types(
		array(
			'public'       => true,
			'show_in_rest' => true,
		),
		'objects'
	);

	$options = array();

	foreach ( $post_types as $post_type ) {
		if ( 'product' === $post_type->name ) {
			continue;
		}

		if ( 'attachment' === $post_type->name ) {
			continue;
		}

		$options[] = array(
			'value' => $post_type->name,
			'label' => $post_type->label,
		);
	}
	array_unshift( $options, array (
			'value' => '',
			'label' => 'Select CPT...',
		)
	);

	return $options;

}

/* PHP OUTPUT FOR BLOCK OF POSTS */
require_once( __DIR__ . '/blocks/table-post.php');
/* PHP OUTPUT FOR BLOCK OF POSTS FEED */
require_once( __DIR__ . '/blocks/table-post-feed.php');
/* PHP OUTPUT FOR BLOCK OF EVENTS */
//require_once( __DIR__ . '/blocks/table-event.php');
/* PHP OUTPUT FOR BLOCK OF NEXT EVENTS */
require_once( __DIR__ . '/blocks/table-next-events.php');
/* PHP OUTPUT FOR BLOCK OF POLAR ADS */
require_once( __DIR__ . '/blocks/table-polar-ads.php');
/* PHP OUTPUT FOR BLOCK OF POLAR SPONSOR CONTENT AND AD TEXT */
require_once( __DIR__ . '/blocks/table-polar-sponsor-content.php');