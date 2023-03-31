<?php
$data_table_inline_attributes='';
$dataTableStyle='';
if(isset($attributes['dataTableWidth'])):
    $data_table_inline_attributes .= 'width="'.$attributes['dataTableWidth'].'" ';
endif;
if(isset($attributes['dataTableBorder'])):
    $data_table_inline_attributes .= 'border="'.$attributes['dataTableBorder'].'" ';
endif;
if(isset($attributes['dataCellPadding'])):
    $data_table_inline_attributes .= 'cellpadding="'.$attributes['dataCellPadding'].'" ';
endif;
if(isset($attributes['dataCellSpacing'])):
    $data_table_inline_attributes .= 'cellspacing="'.$attributes['dataCellSpacing'].'" ';
endif;
if(isset($attributes['dataTableAlign'])):
    $data_table_inline_attributes .= 'align="'.$attributes['dataTableAlign'].'" ';
endif;
if(isset($attributes['dataTableBgColor'])):
    $data_table_inline_attributes .= 'bgcolor="'.$attributes['dataTableBgColor'].'" ';
    $dataTableStyle .= 'background-color: '.$attributes['dataTableBgColor'].';';
endif;
?>
<table class="deviceWidth" 
    <?php if(isset($data_table_inline_attributes)): echo $data_table_inline_attributes; endif; ?>
    <?php 
        if(isset($dataTableStyle)): ?>
            style="<?php echo $dataTableStyle; ?>"
        <?php endif; ?>
    >
    <?php require plugin_dir_path( __FILE__ ) . 'event-title.php'; ?>
    <?php require plugin_dir_path( __FILE__ ) . 'event-date.php'; ?>
    <?php require plugin_dir_path( __FILE__ ) . 'event-button.php'; ?>
</table>