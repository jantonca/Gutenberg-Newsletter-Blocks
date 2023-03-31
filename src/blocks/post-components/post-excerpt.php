<?php
    $excerpt_inline='';
    $excerpt_inline_style='';
    if(isset($attributes['excerptValign'])):
        $excerpt_inline .= 'valign="'.$attributes['excerptValign'].'" ';
    endif;
    if(isset($attributes['excerptTextAlign'])):
        $excerpt_inline .= 'align="'.$attributes['excerptTextAlign'].'" ';
        $excerpt_inline_style .= 'text-align:'.$attributes['excerptTextAlign'].';';
    endif;
    if(isset($attributes['excerptTdInlineStyle']['padding'])):
        $excerpt_inline_style .= 'padding:'.$attributes['excerptTdInlineStyle']['padding'].';';
    endif;
    if(isset($attributes['excerptTdInlineStyle']['lineHeight'])):
        $excerpt_inline_style .= 'line-height:'.$attributes['excerptTdInlineStyle']['lineHeight'].';';
    endif;
    if(isset($attributes['excerptStyle']['color'])):
        $excerpt_inline_style .= 'color:'.$attributes['excerptStyle']['color'].';';
    endif;
    if(isset($attributes['excerptStyle']['fontFamily'])):
        $excerpt_inline_style .= 'font-family:'.$attributes['excerptStyle']['fontFamily'].';';
    endif;
    if(isset($attributes['excerptStyle']['fontSize'])):
        $excerpt_inline_style .= 'font-size:'.$attributes['excerptStyle']['fontSize'].';';
    endif;
    if(isset($attributes['excerptStyle']['fontWeight'])):
        $excerpt_inline_style .= 'font-weight:'.$attributes['excerptStyle']['fontWeight'].';';
    endif;

?>
    <?php if (!isset($attributes['displayExcerpt'])): ?>
        <tr>
            <td 
                <?php if(isset($excerpt_inline)): echo $excerpt_inline; endif; ?>
                <?php if(isset($excerpt_inline_style)): ?>
                    style="<?php echo $excerpt_inline_style; ?>"
                <?php endif; ?>
            >
                <?php echo get_the_excerpt( $post_id ); ?>
            </td>
        </tr>
    <?php endif; ?>