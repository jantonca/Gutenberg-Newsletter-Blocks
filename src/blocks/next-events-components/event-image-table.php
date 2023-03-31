<?php
$image_table_inline_attributes='';
$imageTableStyle='';
if(isset($attributes['imageTableWidth'])):
    $image_table_inline_attributes .= 'width="'.$attributes['imageTableWidth'].'" ';
endif;
if(isset($attributes['imageTableBorder'])):
    $image_table_inline_attributes .= 'border="'.$attributes['imageTableBorder'].'" ';
endif;
if(isset($attributes['imageCellPadding'])):
    $image_table_inline_attributes .= 'cellpadding="'.$attributes['imageCellPadding'].'" ';
endif;
if(isset($attributes['imageCellSpacing'])):
    $image_table_inline_attributes .= 'cellspacing="'.$attributes['imageCellSpacing'].'" ';
endif;
if(isset($attributes['imageTableAlign'])):
    $image_table_inline_attributes .= 'align="'.$attributes['imageTableAlign'].'" ';
endif;
if(isset($attributes['imageTableBgColor'])):
    $image_table_inline_attributes .= 'bgcolor="'.$attributes['imageTableBgColor'].'" ';
    $imageTableStyle .= 'background-color: '.$attributes['imageTableBgColor'].';';
endif;
?>
<table class="deviceWidth" 
    <?php if(isset($image_table_inline_attributes)): echo $image_table_inline_attributes; endif; ?>
    <?php 
        if(isset($imageTableStyle)): ?>
            style="<?php echo $imageTableStyle; ?>"
        <?php endif; ?>
    >
    <?php require plugin_dir_path( __FILE__ ) . 'event-featured_image.php'; ?>
</table>