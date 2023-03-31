<?php if($polar_content): ?>
    <center data-parsed >
        <a href="<?php echo $polar_content['url']; ?>">
            <img 
                width="300" 
                height="250" 
                class="float-center" 
                src="<?php echo $polar_content['imgSrc']; ?>" 
                alt="<?php echo $polar_content['title']; ?>" 
                align="center" 
                style="
                    -ms-interpolation-mode:bicubic;
                    margin-top:0;
                    margin-bottom:0;
                    margin-right:auto;
                    margin-left:auto;
                    clear:both;
                    display:block;
                    float:none;
                    max-width:100%;
                    outline-color:0;
                    text-align:center;
                    text-decoration:none;
                    width:auto;
                "
            >
        </a>
        <div  class="table-divider" style="height:<?php echo $divider_ad_text; ?>px;margin:0 auto;clear:both;">&nbsp;</div>
        <?php echo $attributes['polarAdText']; ?>
    </center>
<?php endif; ?>