<?php
    /* FEATURED IMAGE STYLES */
    if(isset($attributes['imageThumbnail'])):
        $image_thumbnail = $attributes['imageThumbnail'];
    else:
        $image_thumbnail = 'thumbnail';
    endif;
    $featuredMediaId = get_post_thumbnail_id( $nextEventid );
    if( $featuredMediaId ):
        $featured_image_array = wp_get_attachment_image_src($featuredMediaId, $image_thumbnail );
        $featured_image_src = $featured_image_array[0];
    else:
        $featured_image_src = $featured_image = plugin_dir_url( dirname( __FILE__ ) )."img/calendar-add-event-button-with-plus-sign.png";
    endif;
    if( !$featured_image_src ):
        $featured_image_src = $featured_image = plugin_dir_url( dirname( __FILE__ ) )."img/calendar-add-event-button-with-plus-sign.png";
    endif;
    //IMAGE STYLES
    //Cell Inline attributes
    $inline_attributes='';
    $inline_styles='';
    if(isset($attributes['imageTdAlign'])):
        $inline_attributes .= 'align="'.$attributes['imageTdAlign'].'" ';
        //$inline_styles .= 'text-align: '.$attributes['imageTdAlign'].';';
    endif;
    if(isset($attributes['imageBg'])):
        $inline_attributes .= 'bgcolor="'.$attributes['imageBg'].'" ';
        $inline_styles .= 'background-color: '.$attributes['imageBg'].';';
    endif;
    if(isset($attributes['imageBorder'])):
        $inline_attributes .= 'border="'.$attributes['imageBorder'].'" ';
        $inline_styles .= 'border:'.$attributes['imageBorder'].';';
    endif;
    //Image styles
    $image_inline_attributes ='';
    $imageInlineStyles='';
    if(isset($attributes['imageWidth'])):
        $image_inline_attributes .= 'width="'.$attributes['imageWidth'].'" ';
        $imageInlineStyles .= 'width: '.$attributes['imageWidth'].'px;';
    endif;
    if(isset($attributes['imageBorderRadius'])):
        $imageInlineStyles .= 'border-radius:'.$attributes['imageBorderRadius'].'px;';
    endif;
    $image_inline_attributes .='class="deviceWidth" ';
    $image_inline_attributes .= 'alt="Image from event '.get_the_title( $nextEventid ).'" ';
    $image_inline_attributes .= 'src="'.$featured_image_src.'"';
    $imageInlineStyles .= 'display: block;';
?>
<?php if (!isset($attributes['displayFeaturedImage'])): ?>
    <tr>
        <td 
            <?php if(isset($inline_attributes)): 
                 echo $inline_attributes;
            endif; ?>
            <?php if(isset($inline_styles)): ?>
                style="<?php echo $inline_styles; ?>"
            <?php endif; ?>
        >
            <p style="mso-table-lspace:0;mso-table-rspace:0; margin:0">
                <a href="<?php echo get_permalink( $nextEventid ) ?>" >
                    <img  
                        <?php echo $image_inline_attributes; ?> 
                        <?php if(isset($imageInlineStyles)): ?>
                            style="<?php echo $imageInlineStyles; ?>"
                        <?php endif; ?>
                    />
                </a>
            </p>
        </td>
    </tr>
<?php endif; ?>