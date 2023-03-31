<?php
    $date_inline='';
    $date_inline_style='';
    if(isset($attributes['dateValign'])):
        $date_inline .= 'valign="'.$attributes['dateValign'].'" ';
    endif;
    if(isset($attributes['dateTextAlign'])):
        $date_inline .= 'align="'.$attributes['dateTextAlign'].'" ';
        $date_inline_style .= 'text-align:'.$attributes['dateTextAlign'].';';
    endif;
    if(isset($attributes['dateTdInlineStyle']['padding'])):
        $date_inline_style .= 'padding:'.$attributes['dateTdInlineStyle']['padding'].';';
    endif;
    if(isset($attributes['dateTdInlineStyle']['lineHeight'])):
        $date_inline_style .= 'line-height:'.$attributes['dateTdInlineStyle']['lineHeight'].';';
    endif;
    if(isset($attributes['dateStyle']['color'])):
        $date_inline_style .= 'color:'.$attributes['dateStyle']['color'].';';
    endif;
    if(isset($attributes['dateStyle']['fontFamily'])):
        $date_inline_style .= 'font-family:'.$attributes['dateStyle']['fontFamily'].';';
    endif;
    if(isset($attributes['dateStyle']['fontSize'])):
        $date_inline_style .= 'font-size:'.$attributes['dateStyle']['fontSize'].';';
    endif;
    if(isset($attributes['dateStyle']['fontWeight'])):
        $date_inline_style .= 'font-weight:'.$attributes['dateStyle']['fontWeight'].';';
    endif;
    $start_date = $next_event['start_date'];
    $end_date = $next_event['end_date'];
    if (!strcmp($start_date, $end_date)) {
        $final_date = $start_date;
    } else {
        $final_date = $start_date.' / '.$end_date;
    }
?>
    <?php if (!isset($attributes['displaydate'])): ?>
        <tr>
            <td 
                <?php if(isset($date_inline)): echo $date_inline; endif; ?>
                <?php if(isset($date_inline_style)): ?>
                    style="<?php echo $date_inline_style; ?>"
                <?php endif; ?>
            >
                <?php echo $final_date; ?>
            </td>
        </tr>
    <?php endif; ?>