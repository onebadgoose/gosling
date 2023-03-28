const { browserSync } = require('laravel-mix');
let mix = require('laravel-mix');
let path = require('path');

mix.setResourceRoot('../');
mix.setPublicPath(path.resolve('./'));

mix.webpackConfig({
    watchOptions: { ignored: [
        path.posix.resolve(__dirname, './node_modules'),
        path.posix.resolve(__dirname, './css'),
        path.posix.resolve(__dirname, './js')
    ] }
});

mix.js('resources/js/app.js', 'js');

mix.postCss("resources/css/app.css", "css");

mix.postCss("resources/css/editor-style.css", "css");

// Edit this for your particular localhost environment url
const domain = 'tailwind.test'; // <= EDIT THIS
const homedir = require('os').homedir();

// The mix script:

mix.browserSync({
    watch: true,
    files: [
        'resources/**/*',
        'template-parts/*',
        'js/*.js',
        '*.php'
    ],
    proxy: 'https://' + domain,
    host: domain,
    open: 'external',
    https: {
      key: homedir + '/.config/valet/Certificates/' + domain + '.key',
      cert: homedir + '/.config/valet/Certificates/' + domain + '.crt'
    },
    notify: true, //Enable or disable notifications
})

if (mix.inProduction()) {
    mix.version();
} else {
    Mix.manifest.refresh = _ => void 0
}