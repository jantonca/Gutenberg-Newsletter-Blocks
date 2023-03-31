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
if(isset($attributes['TableDividerBottom'])):
    $TableDividerTop = 'height: '.$attributes['TableDividerBottom'].'px;';
endif;
?>
<table class="deviceWidth" 
    <?php if(isset($data_table_inline_attributes)): echo $data_table_inline_attributes; endif; ?>
    <?php 
        if(isset($dataTableStyle)): ?>
            style="<?php echo $dataTableStyle; ?>"
        <?php endif; ?>
    >
    <?php require plugin_dir_path( __FILE__ ) . 'title.php'; ?>
    <?php require plugin_dir_path( __FILE__ ) . 'excerpt.php'; ?>
    <?php require plugin_dir_path( __FILE__ ) . 'button.php'; ?>
    <?php require plugin_dir_path( __FILE__ ) . 'sponsor-name.php'; ?>
</table>
<div className="table-divider-top" style="margin:0 auto;clear: both;<?php echo $TableDividerBottom; ?>" >&nbsp;</div>