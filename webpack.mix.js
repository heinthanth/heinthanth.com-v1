const mix = require("laravel-mix");
require('laravel-mix-react-css-modules');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react("resources/js/app.js", "public/js")
   .reactCSSModules('h3x_[local]__[hash:base64:8]')
   .sass("resources/sass/app.sass", "public/css")
   .version();