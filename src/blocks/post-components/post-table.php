<?php
    if(isset($attributes['newsletterPosition'])):
        $newsletter_position = $attributes['newsletterPosition'];
    endif;
    if(!isset( $attributes['postType']) || $attributes['postType'] === '' ):
        $attributes['postType'] = 'post';
    endif;
    $args = array(
        'post_status' => array('publish'),
        //'post_type' => array('post'),
        'post_type' => $attributes['postType'],
        'posts_per_page' => 1,
        'meta_query' => array(
            array(
                'key'   => 'intermedia_newsletter_position',
                'value' => $newsletter_position,
            )
        ),
        'fields' => 'ids',
    );

    $post_id_array = get_posts($args);
    $post_id = $post_id_array[0];

    $table_inline_attributes='';
    $tableStyle='';
    if(isset($attributes['postTableWidth'])):
        $table_inline_attributes .= 'width="'.$attributes['postTableWidth'].'" ';
    endif;
    if(isset($attributes['tableBorder'])):
        $table_inline_attributes .= 'border="'.$attributes['tableBorder'].'" ';
    endif;
    if(isset($attributes['cellPadding'])):
        $table_inline_attributes .= 'cellpadding="'.$attributes['cellPadding'].'" ';
    endif;
    if(isset($attributes['cellSpacing'])):
        $table_inline_attributes .= 'cellspacing="'.$attributes['cellSpacing'].'" ';
    endif;
    if(isset($attributes['tableAlign'])):
        $table_inline_attributes .= 'align="'.$attributes['tableAlign'].'" ';
    endif;
    if(isset($attributes['tableBgColor'])):
        $table_inline_attributes .= 'bgcolor="'.$attributes['tableBgColor'].'" ';
        $tableStyle .= 'background-color: '.$attributes['tableBgColor'].';';
    endif;
?>
<?php if ($post_id): ?>
<table class="deviceWidth" 
    <?php if(isset($table_inline_attributes)): echo $table_inline_attributes; endif; ?>
    <?php if(isset($tableStyle)): ?> style="<?php echo $table_inline_attributes; ?>" <?php endif; ?>
>
    <?php require plugin_dir_path( __FILE__ ) . 'post-featured_image.php'; ?>
    <?php require plugin_dir_path( __FILE__ ) . 'post-title.php'; ?>
    <?php require plugin_dir_path( __FILE__ ) . 'post-excerpt.php'; ?>
    <?php require plugin_dir_path( __FILE__ ) . 'post-button.php'; ?>
</table>
<?php else: ?>
<table class="deviceWidth" 
    <?php if(isset($table_inline_attributes)): echo $table_inline_attributes; endif; ?>
    <?php if(isset($tableStyle)): ?> style="<?php echo $table_inline_attributes; ?>" <?php endif; ?>
>
    <tr>
        <td>
            No post available in position <?php echo $newsletter_position; ?>
        </td>
    </tr>
</table>
<?php endif; ?>