<?php
    /* BUTTON STYLES */
    $button_table_inline='';
    $button_td_inline='';
    $button_td_inline_style='';
    $button_link_style='';
    if(isset($attributes['buttonText'])):
        $buttonText = $attributes['buttonText'];
    else:
        $buttonText = "Read More";
    endif;
    if(isset($attributes['buttonTableWidth'])):
        $button_table_inline .= 'width="'.$attributes['buttonTableWidth'].'" ';
    endif;
    if(isset($attributes['buttonTableAlign'])):
        $button_table_inline .= 'align="'.$attributes['buttonTableAlign'].'" ';
    endif;
    if(isset($attributes['buttonTdBgColor'])):
        $button_td_inline .= 'bgcolor="'.$attributes['buttonTdBgColor'].'" ';
        $button_td_inline_style .= 'background-color:'.$attributes['buttonTdBgColor'].';';
    endif;
    if(isset($attributes['buttonTdPadding'])):
        $button_td_inline_style .= 'padding:'.$attributes['buttonTdPadding'].';';
    endif;
    if(isset($attributes['buttonLinkFontColor'])):
        $button_link_style .= 'color: '.$attributes['buttonLinkFontColor'].';';
    endif;
    if(isset($attributes['buttonLinkFontFamily'])):
        $button_link_style .= 'font-family: '.$attributes['buttonLinkFontFamily'].';';
    endif;
    if(isset($attributes['buttonLinkFontSize'])):
        $button_link_style .= 'font-size: '.$attributes['buttonLinkFontSize'].';';
    endif;
    if(isset($attributes['buttonLinkFontWeight'])):
        $button_link_style .= 'font-weight: '.$attributes['buttonLinkFontWeight'].';';
    endif;
    if(isset($attributes['buttonLinkTextAlign'])):
        $button_td_inline_style .= 'text-align:'.$attributes['buttonLinkTextAlign'].';';
        $button_link_style .= 'text-align: '.$attributes['buttonLinkTextAlign'].';';
    endif;
    if(isset($attributes['buttonLinkTextDecoration'])):
        $button_link_style .= 'text-decoration: '.$attributes['buttonLinkTextDecoration'].';';
    endif;
?>
<?php if (!isset($attributes['displayButton'])): ?>
    <tr>
        <td>
            <table <?php echo $button_table_inline; ?> class="table-button" >
                <tr>
                    <td 
                        <?php echo $button_td_inline; ?>
                        <?php if(isset($attributes['buttonTdPadding'])): ?>
                            style="<?php echo $button_td_inline_style; ?>"
                        <?php endif; ?>
                    >
                        <a 
                            href="<?php echo get_permalink( $post_id ) ?>" 
                            <?php if(isset($attributes['buttonLinkStyle'])): ?>
                                style="<?php echo $button_link_style; ?>"
                            <?php endif; ?>
                        >
                            <?php echo $buttonText; ?>
                        </a>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
<?php endif; ?>