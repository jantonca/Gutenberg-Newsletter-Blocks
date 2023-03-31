<?php
    if(isset($attributes['urlFeed'])):
        $url_feed = $attributes['urlFeed'];
    endif;
    if(isset($attributes['postOffset'])):
        $post_offset = $attributes['postOffset'];
    endif;
    if(isset($attributes['postCatExclude'])):
        $cat_exclude = $attributes['postCatExclude'];
    endif;
    if(isset($attributes['postTagExclude'])):
        $tag_exclude = $attributes['postTagExclude'];
    endif;
    if(isset($attributes['featuredImageCrop'])):
        $featured_image_crop = $attributes['featuredImageCrop'];
    endif;
    $post_feed = fetch_feed_post_content($url_feed, $post_offset, $cat_exclude, $tag_exclude, $featured_image_crop);
    //var_dump($post_feed);
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
<?php if (is_array($post_feed)): ?>

<?php 
    $post_title = $post_feed[0]['title'];
    $post_link = $post_feed[0]['link'];
    $post_image = $post_feed[0]['featured_image'];
    $post_excerpt = $post_feed[0]['excerpt'];    
?>

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
                <?php echo $post_feed; ?>
            </td>
        </tr>
    </table>
<?php endif; ?>