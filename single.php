<?php get_header(); ?>

	<div class="container mx-auto my-8">

	<?php if ( have_posts() ) : ?>

		<?php
		while ( have_posts() ) :
		
			the_post();	
			
		endwhile; ?>

	<?php endif; ?>

	</div>

<?php
get_footer();
