<?php

    function render_dynamic_table_polar_sponsor_content($attributes) {
        ob_start(); // Turn on output buffering
        //var_dump($attributes);
        /* BEGIN HTML OUTPUT */
        $polarSponsorContentType = $attributes['polarSponsorContentType'];
        $polarSponsorContentId = $attributes['polarSponsorContentId'];
        if ( class_exists( 'IntermediaGroup_PolarSetting' ) ) {
            $sponsor_content = IntermediaGroup_PolarSetting::getPolarContent($polarSponsorContentId);
        } else {
            $sponsor_content = '';
        }
        //var_dump($sponsor_content);
    ?>

        <?php switch ($polarSponsorContentType) { 
            case 'sponsorContent': ?>
                <?php require plugin_dir_path( __FILE__ ) . 'polar-sponsor-content/sponsor-content.php'; ?>
                <?php break;
            case 'textAd': ?>
                No Polar template for text ad
                <?php //require plugin_dir_path( __FILE__ ) . 'polar-sponsor-content/text-ad.php'; ?>
                <?php break;
            default: ?>
                No Polar Sponsor Content
        <?php } ?>

    <?php
        /* END HTML OUTPUT */
        $output = ob_get_contents(); // collect output
        ob_end_clean(); // Turn off ouput buffer
        return $output; // Print output
    }