<?php
/**
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function intermedia_display_newsletter_blocks_settings_page() { ?>

    <div class="wrap">
        <h1>Intermedia Newsletter Blocks</h1>
        <?php settings_errors(); ?>
        <?php $active_tab = isset( $_GET[ 'tab' ] ) ? $_GET[ 'tab' ] : 'position_options'; ?>
        <h2 class="nav-tab-wrapper">
            <a href="?page=intermedia-newsletter-blocks%2Fadmin%2Fbackend%2Fbackend-scripts.php&tab=position_options" class="button button-secondary nav-tab <?php echo $active_tab == 'position_options' ? 'nav-tab-active' : ''; ?>">Position Options</a>
            <a href="?page=intermedia-newsletter-blocks%2Fadmin%2Fbackend%2Fbackend-scripts.php&tab=newsletter_options" class="button button-secondary nav-tab <?php echo $active_tab == 'newsletter_options' ? 'nav-tab-active' : ''; ?>">Newsletter Options</a>
        </h2>

        <form method="post" action="options.php">

            <?php if( $active_tab == 'position_options' ) : ?>

            <?php settings_fields( 'intermedia-newsletter-blocks-settings-group' ); ?>
            <?php do_settings_sections( 'intermedia-newsletter-blocks-settings-group' ); ?>

            <table class="form-table">
                <tr valign="top">
                    <th scope="row">Add the amount of positions.</th>
                    <td>
                        <input type="text" name="amount_newsletters" value="<?php echo esc_attr( get_option('amount_newsletters') ); ?>" />
                    </td>
                </tr>
            </table>
            <hr>
            <?php for ($x = 1; $x <= get_option('amount_newsletters'); $x++): ?>
                <h2>POSITION <?php echo $x; ?></h2>
                <table class="form-table">
                    <tr valign="top">
                        <th scope="row">Add the name of the position.</th>
                        <td>
                            <input type="text" name="name_newsletter_<?php echo $x; ?>" value="<?php echo esc_attr( get_option('name_newsletter_'.$x) ); ?>" />
                        </td>
                    </tr>
                </table>
                <table class="form-table">
                    <tr valign="top">
                        <th scope="row">Add the amount of positions.</th>
                        <td>
                            <input type="text" name="positions_newsletter_<?php echo $x; ?>" value="<?php echo esc_attr( get_option('positions_newsletter_'.$x) ); ?>" />
                        </td>
                    </tr>
                </table>
                <hr>
            <?php endfor; ?>
            <?php if ( current_user_can( 'manage_options' ) ) { ?>
            <script type="text/javascript" >
                jQuery(document).ready(function($) {
                    $('.resetPositionsAjax').click(function(){
                        if(!confirm('Are you sure to delete all the positions?\nThis action cannot be undone!.')){
                            return false;
                        }
                        var data = {
                            action: 'reset_newsletter_positions',
                            result: ''
                        };
                        $.post( ajaxurl, data, function( response ) {
                            alert( response );
                        });
                    });
                });
            </script>
            <table class="form-table">
                <tr valign="top">
                    <td>
                        <p></p>
                        <a href="#resetPositionsAjax" class="resetPositionsAjax button button-secondary">RESET ALL POSITIONS</a>
                    </td>
                </tr>
            </table>
            <hr>
            <?php } ?>

            <?php else: ?>
                <h1>Hi there!!</h1>
            <?php endif; // end if/else ?>

            <?php submit_button(); ?>

        </form>

        
    </div>

<?php }
/****** META BOXES DISPLAY ***********/
function display_newsletter_blocks_meta_box_callback ( $post ) {
    // Add a nonce field so we can check for it later.
    // wp_nonce_field( 'display_newsletter_posts_nonce', 'display_newsletter_posts_nonce' );
    $value_newsletter_position = get_post_meta( $post->ID, 'intermedia_newsletter_position', true );
?>
    <label for="newsletter_position">Select a position of this article inside a newsletter.</label>
    <select style="width:80%;margin-top: 10px;" id="newsletter_positions" name="newsletter_positions" class="select-box">
        <option value="">Select a position...</option>
        <?php for ( $x = 1; $x <= get_option('amount_newsletters'); $x++ ): ?>
            <?php 
                $name_newsletter_raw = get_option('name_newsletter_'.$x);
                $name_newsletter = str_replace(' ', '_', $name_newsletter_raw);
                $name_newsletter = strtolower($name_newsletter);
                $name_newsletter = preg_replace( '/[^A-Za-z0-9\-]/', '', $name_newsletter );
            ?>
            <?php for ( $y = 1; $y <= get_option('positions_newsletter_'.$x); $y++ ): ?>
                <option value="<?php echo $name_newsletter; ?>_position_<?php echo $y; ?>" <?php selected( $value_newsletter_position, $name_newsletter.'_position_'.$y ); ?>>
                <?php echo $name_newsletter_raw; ?> position <?php echo $y; ?>
                </option>
            <?php endfor; ?>
        <?php endfor; ?>
    </select>
    <?php
}

function erase_positions_metadata ( $current_user ) {
    global $current_user;
    wp_get_current_user();
    $current_user->user_login;
    global $wpdb; // this is how you get access to the database
    $result = $_POST['result'];
    $args = array(
        'posts_per_page' => -1, // this gets all posts, you may only want to get a few at a time
        'post_type' => prefix_get_post_types(),
        'meta_key' => 'intermedia_newsletter_position',
        'fields' => 'ids'
    );
    $post_with_positions = get_posts( $args );
    if ( count( $post_with_positions ) > 0 ) {
        $s = (count( $post_with_positions ) > 1 ? 's' : '');
        $message = count( $post_with_positions ).' post'.$s.' deleted position'.$s.': ';
        foreach ($post_with_positions as $post_id) {
            delete_post_meta($post_id, 'intermedia_newsletter_position');
            $message .= ' '.$post_id.',';
        }
    } else {
        $message = 'Hi '.$current_user->user_login.', there are not positions asigned to any post..';
    }
    $result = $message;
    echo $result;
    exit(); // this is required to return a proper result & exit is faster than die();
}
add_action('wp_ajax_reset_newsletter_positions', 'erase_positions_metadata');