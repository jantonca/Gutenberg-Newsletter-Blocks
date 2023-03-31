<?php
    $divider_attributes = 'margin:0 auto;clear:both;';
    if(isset($attributes['dividerHeight'])):
        $divider_attributes .= 'height:'.$attributes['dividerHeight'].'px;';
    endif;
    if(isset($attributes['dividerBgColor'])):
        $divider_attributes .= 'background-color:'.$attributes['dividerBgColor'].';';
    endif;
?>
<div  class="table-divider" style="<?php echo $divider_attributes; ?>">&nbsp;</div>