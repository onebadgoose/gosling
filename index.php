<?php get_header(); ?>

    <div class="bg-gray-200">
        <div class="container mx-auto mt-4">
            <h1 class="text-2xl md:text-3xl lg:text-4xl">Hello World!</h1>
        </div>
    </div>

    <?php 
        if ( have_posts() ) {
            while ( have_posts() ) {
                the_post(); 
                
                the_content();
            } // end while
        } // end if
    ?>

<?php get_footer(); ?>
