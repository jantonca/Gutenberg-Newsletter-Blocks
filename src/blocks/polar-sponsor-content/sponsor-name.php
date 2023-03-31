<?php
    $name_inline='';
    $name_inline_style='';
    if(isset($attributes['nameTex'])):
        $name_text = $attributes['nameTex'];
    else:
        $name_text = 'Sponsored by';
    endif;
    if(isset($attributes['nameValign'])):
        $name_inline .= 'valign="'.$attributes['nameValign'].'" ';
    endif;
    if(isset($attributes['nameAlign'])):
        $name_inline .= 'align="'.$attributes['nameAlign'].'" ';
        $name_inline_style .= 'text-align:'.$attributes['nameAlign'].';';
    endif;
    if(isset($attributes['nameStyles']['fontFamily'])):
        $name_inline_style .= 'font-family:'.$attributes['nameStyles']['fontFamily'].';';
    endif;
    if(isset($attributes['nameStyles']['fontSize'])):
        $name_inline_style .= 'font-size:'.$attributes['nameStyles']['fontSize'].';';
    endif;
    if(isset($attributes['nameStyles']['fontWeight'])):
        $name_inline_style .= 'font-weight:'.$attributes['nameStyles']['fontWeight'].';';
    endif;
    if(isset($attributes['nameStyles']['color'])):
        $name_inline_style .= 'color:'.$attributes['nameStyles']['color'].';';
    endif;
    if(isset($attributes['nameStyles']['lineHeight'])):
        $name_inline_style .= 'line-height:'.isset($attributes['nameTdInlineStyle']['lineHeight']).';';
    endif;
    if(isset($attributes['nameStyles']['padding'])):
        $name_inline_style .= 'padding:'.$attributes['nameStyles']['padding'].';';
    endif;
    if(isset($attributes['nameStyles']['textAlign'])):
        $name_inline_style .= 'text-align:'.$attributes['nameStyles']['textAlign'].';';
    endif;
?>
    <?php if (!isset($attributes['displayname'])): ?>
        <tr>
            <td 
                <?php if(isset($name_inline)): echo $name_inline; endif; ?>
                <?php if(isset($name_inline_style)): ?>
                    style="<?php echo $name_inline_style; ?>"
                <?php endif; ?>
            >
                <?php echo $name_text; ?>
                <strong> <?php echo $sponsor_content['sponsor']; ?></strong>
            </td>
        </tr>
    <?php endif; ?>