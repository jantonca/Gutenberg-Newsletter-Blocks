<?php
    $title_td_inline='';
    $title_td_inline_style='';
    $title_link_style='';
    if(isset($attributes['titleTdValign'])):
        $title_td_inline .= 'valign="'.$attributes['titleTdValign'].'" ';
    endif;
    if(isset($attributes['titleLinkTextAlign'])):
        $title_td_inline .= 'align="'.$attributes['titleLinkTextAlign'].'" ';
        $title_td_inline_style .= 'text-align:'.$attributes['titleLinkTextAlign'].';';
    endif;
    if(isset($attributes['titlePadding'])):
        $title_td_inline_style .= 'padding:'.$attributes['titlePadding'].';';
    endif;
    if(isset($attributes['titleLineHeight'])):
        $title_td_inline_style .= 'line-height:'.$attributes['titleLineHeight'].';';
    endif;

    if(isset($attributes['titleLinkFontFamily'])):
        $title_link_style .= 'font-family:'.$attributes['titleLinkFontFamily'].';';
    endif;
    if(isset($attributes['titleLinkFontSize'])):
        $title_link_style .= 'font-size:'.$attributes['titleLinkFontSize'].';';
    endif;
    if(isset($attributes['titleLinkFontWeight'])):
        $title_link_style .= 'font-weight:'.$attributes['titleLinkFontWeight'].';';
    endif;
    if(isset($attributes['titleLinkFontColor'])):
        $title_link_style .= 'color:'.$attributes['titleLinkFontColor'].';';
    endif;
    if(isset($attributes['titleLinkTextDecoration'])):
        $title_link_style .= 'text-decoration:'.$attributes['titleLinkTextDecoration'].';';
    endif;
?>
<tr>
    <td 
        <?php if(isset($title_td_inline)): echo $title_td_inline; endif; ?>
        <?php if(isset($title_td_inline_style)): ?>
            style="<?php echo $title_td_inline_style; ?>"
        <?php endif; ?> 
    >
        <a href="<?php echo get_permalink( $nextEventid ) ?>" 
            <?php if(isset($title_link_style)): ?>
                style="<?php echo $title_link_style; ?>"
            <?php endif; ?> 
        >
            <?php echo get_the_title( $nextEventid ); ?>
        </a>
    </td>
</tr>