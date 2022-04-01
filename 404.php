<?php

/**
 * The template for displaying 404 pages (Not Found)
 */

get_header();

?>



<!-- 404 Page -->
<section class="flex items-center h-screen text-gray-600 body-font">
    <div class="container px-5 mx-auto mb-16">
        <div class="w-full mx-auto text-center xl:w-1/2 lg:w-3/4">
            <h1 class="mb-8 italic font-bold text-center text-yellow-500 text-8xl">404</h1>
            <p id="text" class="hidden text-lg leading-relaxed">Trust your own instinct. Your mistakes might as well be your own, instead of someone elses.</p>
            <span class="inline-block w-10 h-1 mt-8 mb-6 bg-yellow-500 rounded"></span>
            <h2 id="author" class="hidden text-sm font-medium tracking-wider text-gray-900 title-font">Billy Wilder</h2>
        </div>
    </div>
</section>


<script>
    // Simple Function to get a random quote for the 404 page, feel free to delete
    const jsonData = fetch("https://type.fit/api/quotes")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            const values = data
            const randomValue = values[parseInt(Math.random() * values.length)]
            document.getElementById("text").innerHTML = randomValue.text;
            document.getElementById("author").innerHTML = randomValue.author;
            document.getElementById("text").classList.remove("hidden");
            document.getElementById("author").classList.remove("hidden");
        });
</script>


<?php get_footer(); ?>