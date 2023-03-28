import Swup from 'swup';
import SwupPreloadPlugin from '@swup/preload-plugin';
import SwupFadeTheme from '@swup/fade-theme';
import SwupProgressPlugin from '@swup/progress-plugin';




const swup = new Swup({
      plugins: [
            new SwupPreloadPlugin(),
            new SwupFadeTheme(),
            new SwupProgressPlugin({
                  className: 'swup-progress-bar',
                  transition: 200,
                  delay: 300,
                  initialValue: 0.25,
                  hideImmediately: false
            })
      ]
});



// Navigation toggle
window.addEventListener('load', function () {
      let main_navigation = document.querySelector('#primary-menu');
      document.querySelector('#primary-menu-toggle').addEventListener('click', function (e) {
            e.preventDefault();
            main_navigation.classList.toggle('hidden');
      });
});
