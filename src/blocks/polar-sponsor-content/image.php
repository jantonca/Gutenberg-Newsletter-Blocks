<?php
    /* FEATURED IMAGE STYLES */

    if( isset($sponsor_content['imgSrc']) ):
        $featured_image_src = $sponsor_content['imgSrc'];
    else:
        $featured_image_src = $featured_image = "https://via.placeholder.com/600x450";
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
    $image_inline_attributes .= 'alt="Image from event '.get_the_title( isset($attributes['eventId']) ).'" ';
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
                <a href="<?php echo $sponsor_content['url']; ?>" >
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