<?php
/**
 *
 * @package CGB
 */
// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/* Get all featured image sizes and add to the REST API */
add_action('rest_api_init', 'register_rest_crops_attachments' );
function register_rest_crops_attachments(){
    
    register_rest_field( array('attachment'),
        'media_crops',
        array(
            'get_callback'    => 'get_register_rest_crops_attachments',
            'update_callback' => null,
            'schema'          => null,
        )
    );

}
function get_register_rest_crops_attachments( $object, $field_name, $request ) {
     
    $img_thumbnails = get_intermediate_image_sizes();
    
    return $img_thumbnails;
    
}
/* function get_rest_featured_image_events( $object, $field_name, $request ) {
    
    if( $object['featured_media'] ){
        
        $img_thumbnails = get_intermediate_image_sizes( $object['featured_media'] );
        
        return $img_thumbnails;
        
    } else {
        $img_thumbnails = get_intermediate_image_sizes();
    }
    
    return $img_thumbnails;
    
} */
/**
 * DISPLAY FRONT-END NEXT EVENTS FUNCTION
 *
 * @param [type] $EventsToDisplay
 * @param [type] $cat_ids
 * @param [type] $tag_ids
 * @return [array] $array_next_events
 */
function get_ai1ec_next_events( $EventsToDisplay, $cat_ids, $tag_ids ) {
    global $ai1ec_registry;
    $time = $ai1ec_registry->get( 'date.system' );
    // Get localized time
    $timestamp = $time->current_time();
    if (isset($EventsToDisplay)) {
        $amount_events = $EventsToDisplay;
    } else {
        $amount_events = -1;
    }
    if (isset($cat_ids)) {
        $cat_ids_limit = $cat_ids;
    } else {
        $cat_ids_limit = array(-1);
    }
    if (isset($tag_ids)) {
        $tag_ids_limit = $tag_ids;
    } else {
        $tag_ids_limit = array(-1);
    }
    // Set $limit to the specified categories/tags
    $limit = array(
        'cat_ids' => array($cat_ids_limit),
        'tag_ids' => array($tag_ids_limit),
    );
    $events_per_page = $amount_events;
    $paged           = 0;
    $event_results   = $ai1ec_registry->get( 'model.search' )->get_events_relative_to(
        $timestamp,
        $events_per_page,
        $paged,
        $limit
    );
    $dates = $ai1ec_registry->get('view.calendar.view.agenda', 
             $ai1ec_registry->get( 'http.request.parser' ) )->get_agenda_like_date_array( $event_results['events'] );
    foreach ( $event_results['events'] as $event ) {
        $event_start_long_date = $event->get( 'start' );
        $event_end_long_date = $event->get( 'end' );
        $start_date = date_create( $ai1ec_registry->get('view.event.time')->get_long_date( $event_start_long_date ) );
        $end_date = date_create( $ai1ec_registry->get('view.event.time')->get_long_date( $event_end_long_date ) );
        $array_next_events[] = array (
            'id' => (int)$event->get( 'post_id' ),
            'post_excerpt' => $event->get( 'post' )->post_excerpt,
            'start_date' => date_format( $start_date,"d-M-Y" ),
            'end_date' => date_format( $end_date,"d-M-Y" ),
            'all_day' => $event->get( 'allday' ),
            'venue' => $event->get( 'venue' ),
        );
    }
    return $array_next_events;
}
/********POSTS FEED FROM EXTERNAL URL **********************/
/**
 * GET REMOTE RESPONSE
 *
 * @param [type] $feed
 * @param [type] $per_page
 * @return [object] $response
 */
function get_remote_feed_response($feed, $post_offset, $cat_exclude, $tag_exclude) {
    // connect to the website endpoint with wp_remote_get() function
    // pass params as URL query args, full parameter list is here https://developer.wordpress.org/rest-api/reference/posts/#arguments
    // at this moment you can use any parameter with Context: View
    // because it would be strange if you can fetch drafts or private posts.
    $per_page = 1;
    $response = wp_remote_get( 
        add_query_arg( 
            array(
                'per_page' => $per_page,
                'offset' => $post_offset,
                'categories_exclude' => $cat_exclude,
                'tags_exclude' => $tag_exclude
            ), 
            'https://'.$feed.'/wp-json/wp/v2/posts?_embed'
        ) 
    );

    return $response;

}
/**
 * GET FEED CONTENT ARRAY
 *
 * @param [type] $response_body
 * @return [array] $posts_array
 */
function get_feed_post_content_array ( $response_body, $featured_image_crop ) {

    $remote_posts = json_decode( $response_body ); // our posts are here

    foreach( $remote_posts as $key => $remote_post ) {
        $posts_array[$key]['title'] = $remote_post->title->rendered;
        $posts_array[$key]['link'] = $remote_post->link;
        $posts_array[$key]['excerpt'] = $remote_post->excerpt->rendered;
        //$posts_array[$key]['featured_image'] = $remote_post->_embedded->{'wp:featuredmedia'}[0]->media_details->sizes->$featured_image_crop->source_url;
        //var_dump($remote_post->_embedded->{'wp:featuredmedia'}[0]->media_details->sizes);
        if (isset($remote_post->_embedded->{'wp:featuredmedia'}[0]->media_details->sizes->$featured_image_crop->source_url)) {
            $posts_array[$key]['featured_image'] = $remote_post->_embedded->{'wp:featuredmedia'}[0]->media_details->sizes->$featured_image_crop->source_url;
        } else {
            $posts_array[$key]['featured_image'] = $remote_post->_embedded->{'wp:featuredmedia'}[0]->source_url;
        }
    }

    return $posts_array;

}
/**
 * FETCH FEED CONTENT
 *
 * @param [type] $feed
 * @param [type] $post_offset
 * @return [array] $output
 */
function fetch_feed_post_content($feed, $post_offset, $cat_exclude, $tag_exclude, $featured_image_crop) {

    $response = get_remote_feed_response($feed, $post_offset, $cat_exclude, $tag_exclude);
    //var_dump($response);
    if( !is_wp_error( $response ) && $response['response']['code'] == 200 ) {
    
        $output = get_feed_post_content_array ( $response['body'], $featured_image_crop );

    } elseif(!is_wp_error( $response ) && $response['response']['code'] != 200) {
        $output = 'Error '.$response['response']['code'].': '.$response['response']['message'];
    }
    if( is_wp_error( $response ) ) {
        $output = 'Error: '.$response->get_error_message();
    }
    return $output;

}