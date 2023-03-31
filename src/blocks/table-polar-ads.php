<?php

    function render_dynamic_table_polar_ads($attributes) {
        ob_start(); // Turn on output buffering
        /* BEGIN HTML OUTPUT */
        $polarAdType = $attributes['polarAdType'];
        $polarAdId = $attributes['polarAdId'];
        $divider_ad_text = $attributes['dividerStyle']['height'];
        //$polar_content = IntermediaGroup_PolarSetting::getPolarContent($polarAdId);
        if (class_exists('IntermediaGroup_PolarSetting')) {
	        $polar_content = IntermediaGroup_PolarSetting::getPolarContent($polarAdId);
        } else {
            return "Install the plugin Polar for Newsletters";
        }
        
?>
        <?php switch ($polarAdType) { 
            case 'mrec': ?>
                <?php require plugin_dir_path( __FILE__ ) . 'polar-ads/polar-ad-mrec.php'; ?>
                <?php break;
            case 'leaderboard': ?>
                <?php require plugin_dir_path( __FILE__ ) . 'polar-ads/polar-ad-leaderboard.php'; ?>
                <?php break;
            default: ?>
                No Polar Ad
        <?php } ?>
<?php
        /* END HTML OUTPUT */
        $output = ob_get_contents(); // collect output
        ob_end_clean(); // Turn off ouput buffer
        return $output; // Print output
    }