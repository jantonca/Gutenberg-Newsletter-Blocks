<?php
    $excerpt_inline='';
    $excerpt_inline_style='';
    if(isset($attributes['excerptValign'])):
        $excerpt_inline .= 'valign="'.$attributes['excerptValign'].'" ';
    endif;
    if(isset($attributes['excerptAlign'])):
        $excerpt_inline .= 'align="'.$attributes['excerptAlign'].'" ';
        $excerpt_inline_style .= 'text-align:'.$attributes['excerptAlign'].';';
    endif;
    if(isset($attributes['excerptStyles']['fontFamily'])):
        $excerpt_inline_style .= 'font-family:'.$attributes['excerptStyles']['fontFamily'].';';
    endif;
    if(isset($attributes['excerptStyles']['fontSize'])):
        $excerpt_inline_style .= 'font-size:'.$attributes['excerptStyles']['fontSize'].';';
    endif;
    if(isset($attributes['excerptStyles']['fontWeight'])):
        $excerpt_inline_style .= 'font-weight:'.$attributes['excerptStyles']['fontWeight'].';';
    endif;
    if(isset($attributes['excerptStyles']['color'])):
        $excerpt_inline_style .= 'color:'.$attributes['excerptStyles']['color'].';';
    endif;
    if(isset($attributes['excerptStyles']['lineHeight'])):
        $excerpt_inline_style .= 'line-height:'.isset($attributes['excerptTdInlineStyle']['lineHeight']).';';
    endif;
    if(isset($attributes['excerptStyles']['padding'])):
        $excerpt_inline_style .= 'padding:'.$attributes['excerptStyles']['padding'].';';
    endif;
    if(isset($attributes['excerptStyles']['textAlign'])):
        $excerpt_inline_style .= 'text-align:'.$attributes['excerptStyles']['textAlign'].';';
    endif;
?>
    <?php if (!isset($attributes['displayexcerpt'])): ?>
        <tr>
            <td 
                <?php if(isset($excerpt_inline)): echo $excerpt_inline; endif; ?>
                <?php if(isset($excerpt_inline_style)): ?>
                    style="<?php echo $excerpt_inline_style; ?>"
                <?php endif; ?>
            >
                <?php echo $sponsor_content['desc']; ?>
            </td>
        </tr>
    <?php endif; ?>