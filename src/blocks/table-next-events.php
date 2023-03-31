<?php

    function render_dynamic_table_next_events($attributes) {
        //var_dump($attributes);
        $EventsToDisplay = $attributes['eventsQueryAmount'];
        if (!isset($attributes['eventsQueryAmount'])):  
            $EventsToDisplay = 10;
        else:
            $EventsToDisplay =  $attributes['eventsQueryAmount'];
        endif;
        if (!isset($attributes['eventCategory'])):
            $catIdEvent = -1;
        else:
            $catIdEvent =  $attributes['eventCategory'];
        endif;
        if (!isset($attributes['eventTag'])):
            $tagIdEvent = -1;
        else:
            $tagIdEvent =  $attributes['eventTag'];
        endif;
        $events_array_id = get_ai1ec_next_events($EventsToDisplay, $catIdEvent, $tagIdEvent);

        ob_start(); // Turn on output buffering

        /* BEGIN HTML OUTPUT */
    ?>
    <?php if($events_array_id): ?>
        <?php 
            $numItems = count($events_array_id);
            $i = 0;
        ?>
        <?php foreach ($events_array_id as $next_event ): ?>
            <?php $nextEventid = $next_event['id']; ?>
            <?php require plugin_dir_path( __FILE__ ) . 'next-events-components/event-image-table.php'; ?>
            <?php require plugin_dir_path( __FILE__ ) . 'next-events-components/event-data-table.php'; ?>
            <?php if(++$i !== $numItems): ?>
                <?php require plugin_dir_path( __FILE__ ) . 'next-events-components/event-table-divider.php'; ?>
            <?php  endif; ?>
        <?php endforeach; ?>

    <?php else: ?>
        <?php echo 'No events to display.' ?>
    <?php  endif; ?>

    <?php
        /* END HTML OUTPUT */
        $output = ob_get_contents(); // collect output
        ob_end_clean(); // Turn off ouput buffer
        return $output; // Print output
    }