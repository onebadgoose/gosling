<?php

const BIIIRD_THEME_VERSION = 1.0;

// Enqueue Tailwind CSS
add_action( 'wp_enqueue_scripts', 'enqueue_function', 10 );
function enqueue_function() {
	$version = ( wp_get_environment_type() === 'development' ) ? time() : BIIIRD_THEME_VERSION;
	wp_enqueue_style( 'tailwind', get_template_directory_uri() . '/assets/css/main.css', $version, true );
}


// Add site functions for ACF
if( function_exists('acf_add_options_page') ) {
	
	acf_add_options_page();
	
}

