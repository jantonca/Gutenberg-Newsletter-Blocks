<?php
    /* FEATURED IMAGE STYLES */
    if(isset($attributes['imageThumbnail'])):
        $image_thumbnail = $attributes['imageThumbnail'];
    else:
        $image_thumbnail = 'thumbnail';
    endif;
    $featuredMediaId = get_post_thumbnail_id( $post_id );
    $featured_image_src = wp_get_attachment_image_src($featuredMediaId, $image_thumbnail );
    if(isset($featured_image_src)):
        $featured_image_src[] = 'https://via.placeholder.com/150/000000/FFFFFF/?text=No+Image';
    endif;
    //IMAGE STYLES
    //Cell Inline attributes
    $inline_attributes='';
    $inline_styles='';
    if(isset($attributes['imageTdAlign'])):
        $inline_attributes .= 'align="'.$attributes['imageTdAlign'].'" ';
        $inline_styles .= 'text-align: '.$attributes['imageTdAlign'].';';
    endif;
    if(isset($attributes['imageBg'])):
        $inline_attributes .= 'bgcolor="'.$attributes['imageBg'].'" ';
        $inline_styles .= 'background-color:'.$attributes['imageBg'].';';
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
    // if(isset($attributes['imageBorderRadius'])):
    //     $imageInlineStyles .= 'border-radius: '.$attributes['imageBorderRadius'].';';
    // endif;
    $image_inline_attributes .='class="deviceWidth" ';
    $image_inline_attributes .= 'alt="Image from post '.get_the_title( $post_id ).'" ';
    $image_inline_attributes .= 'src="'.$featured_image_src[0].'"';
    $imageInlineStyles .= 'display: block;margin: 0 auto;';
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
                <a href="<?php echo get_permalink( $post_id ) ?>" >
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