<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

	<?php wp_head(); ?>
</head>

<body <?php body_class( 'bg-white text-gray-900 antialiased' ); ?>>

<?php do_action( 'goose_theme_site_before' ); ?>

<div id="page" class="flex flex-col min-h-screen">

	<?php do_action( 'goose_theme_header' ); ?>

	<header>

		<div class="container mx-auto">
			<div class="py-6 border-b lg:flex lg:justify-between lg:items-center">
				<div class="flex items-center justify-between">
					<div>
						<?php if ( has_custom_logo() ) { ?>
                            <?php the_custom_logo(); ?>
						<?php } else { ?>
							<a href="<?php echo get_bloginfo( 'url' ); ?>" class="text-lg font-extrabold uppercase">
								<?php echo get_bloginfo( 'name' ); ?>
							</a>

							<p class="text-sm font-light text-gray-600">
								<?php echo get_bloginfo( 'description' ); ?>
							</p>

						<?php } ?>
					</div>

					<div class="lg:hidden">
						<a href="#" aria-label="Toggle navigation" id="primary-menu-toggle">
							<svg viewBox="0 0 20 20" class="inline-block w-6 h-6" version="1.1"
								 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g stroke="none" stroke-width="1" fill="currentColor" fill-rule="evenodd">
									<g id="icon-shape">
										<path d="M0,3 L20,3 L20,5 L0,5 L0,3 Z M0,9 L20,9 L20,11 L0,11 L0,9 Z M0,15 L20,15 L20,17 L0,17 L0,15 Z"
											  id="Combined-Shape"></path>
									</g>
								</g>
							</svg>
						</a>
					</div>
				</div>

				<?php
				wp_nav_menu(
					array(
						'container_id'    => 'primary-menu',
						'container_class' => 'hidden bg-gray-100 mt-4 p-4 lg:mt-0 lg:p-0 lg:bg-transparent lg:block',
						'menu_class'      => 'lg:flex lg:-mx-4',
						'theme_location'  => 'primary',
						'li_class'        => 'lg:mx-4',
						'fallback_cb'     => false,
					)
				);
				?>
			</div>
		</div>
	</header>

	<div id="content" class="flex-grow site-content">

		<?php if ( is_front_page() ) { ?>
			<!-- Start introduction -->
			<div class="container pb-12 mx-auto my-12 border-b">
				<h1 class="text-lg font-bold text-orange-500 uppercase">TailPress</h1>
				<h2 class="my-4 text-3xl font-extrabold tracking-tight lg:text-7xl">Rapidly build your WordPress theme
					with <a href="https://tailwindcss.com" class="text-yellow-400">Tailwind CSS</a>.</h2>
				<p class="max-w-screen-lg mb-10 text-lg font-medium text-gray-700">TailPress is your go-to starting
					point for developing WordPress themes with TailwindCSS and comes with basic block-editor support out
					of the box.</p>
				<a href="https://github.com/jeffreyvr/tailpress"
					class="flex-none w-full px-6 py-3 text-lg font-semibold leading-6 text-white transition-colors duration-200 bg-gray-900 border border-transparent sm:w-auto rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none">View
					on Github</a>
			</div>
			<!-- End introduction -->
		<?php } ?>

		<?php do_action( 'goose_theme_content_start' ); ?>

		<main>
