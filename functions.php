<?php

const GOSLING_THEME_VERSION = 1.0;

// Enqueue Tailwind CSS
add_action( 'wp_enqueue_scripts', 'enqueue_function', 10 );
function enqueue_function() {
	$version = ( wp_get_environment_type() === 'development' ) ? time() : GOSLING_THEME_VERSION;
	wp_enqueue_style( 'tailwind', get_template_directory_uri() . '/assets/css/main.css', $version, true );
}


// Add site functions for ACF
if( function_exists('acf_add_options_page') ) {
	
	acf_add_options_page();
	
}

// Removes the 28px admin bar bump when signed in
add_action('get_header', 'my_filter_head');

function my_filter_head() {
  remove_action('wp_head', '_admin_bar_bump_cb');
}
