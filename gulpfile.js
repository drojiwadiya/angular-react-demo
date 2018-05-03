var gulp = require('gulp');
var source = require('vinyl-source-stream');
var babelify = require('babelify');
var browserify = require('browserify');
var path = require('path');
var _ = require('underscore');
var watchify = require('watchify');

var PATHS = {
    src: [  // the files being compiled
        './main.jsx',
        './components/MessageList.jsx'
    ],
    dest: './',  // Where the compiled JS bundle will go

};

var REACT_OPTS = { es6: true, global: true },
    BROWSERIFY_OPTS = _.extend({
        entries: PATHS.src, presets: ["es2015", "react", "stage-0"],
        extensions: ['.js', '.jsx'], debug: true
    }, watchify.args),
    UGLY_OPTS = { global: true };

gulp.task('default', function () {
    // we define our input files, which we want to have
    // bundled:
    var files = [
        "./main.jsx", "./components/MessageList.jsx"
    ];
});

// Task which builds the production-ready JS.
// Minified, JSX & ES6, and browserified.
gulp.task('build', function () {
    console.log("dirname:" + __dirname)
    return browserify(BROWSERIFY_OPTS)
        .transform(babelify.configure({
            presets: ["es2015", "react", "stage-0"]
        })) // transforms jsx into js
        .bundle() // bundles into a single file
        .pipe(source('main.js')) //converts stream to main.js
        .pipe(gulp.dest(PATHS.dest));
})
