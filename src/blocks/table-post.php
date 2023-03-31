<?php

    function render_dynamic_table_post($attributes) {
        ob_start(); // Turn on output buffering
        /* BEGIN HTML OUTPUT */
        //var_dump ($attributes);
?>
        <?php require plugin_dir_path( __FILE__ ) . 'post-components/post-table.php'; ?>
<?php
        /* END HTML OUTPUT */
        $output = ob_get_contents(); // collect output
        ob_end_clean(); // Turn off ouput buffer
        return $output; // Print output
    }