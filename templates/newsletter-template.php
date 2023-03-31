<?php
    /**
     * Template Name: Newsletter Template
     * The template for newsletter.
     *
     * @package 
     */
    if ( ! defined( 'ABSPATH' ) ) {
        exit; // Exit if accessed directly.
    }
?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title><?php the_title(); ?></title>
        <style type="text/css">
            .ReadMsgBody {
                width: 100%; 
                background-color: #ffffff;
            }
            .ExternalClass {
                width: 100%; 
                background-color: #ffffff;
            }
            body {
                width: 100%; 
                background-color: #ffffff; 
                margin:0; padding:0; 
                -webkit-font-smoothing: antialiased;
                font-family: Georgia, Times, serif
            }
            table {
                border-collapse: 
                    collapse;
            }
            @media only screen and (max-width: 640px)  {
                .deviceWidth {
                    width:440px!important; 
                    padding:0;
                }
                .noChangeWidth .deviceWidth {
                    width:initial!important; 
                }
                .center {
                    text-align: center!important;
                }
            }
            @media only screen and (max-width: 479px) {
                .deviceWidth { 
                    width:280px!important; 
                    padding:0;
                }
                .noChangeWidth .deviceWidth {
                    width:initial!important; 
                }
                .center {
                    text-align: center!important;
                }
            }
        </style>
    </head>

    <body style="font-family:Georgia,Times,serif;margin:0;padding:0;">

        <!-- Wrapper -->
        <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center">
            <tr>
                <td width="100%" valign="top" bgcolor="#ffffff" style="padding-top:20px">

                    <!-- /* Start the loop */ -->
                    <?php while ( have_posts() ) : the_post(); the_content(); endwhile; ?>
                    <!-- /* End of the loop.*/  -->

                </td>
            </tr>
        </table> <!-- End Wrapper -->
        <div style="display:none; white-space:nowrap; font:15px courier; color:#ffffff;">
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        </div>
    </body>
</html>