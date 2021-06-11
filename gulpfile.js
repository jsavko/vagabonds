const gulp = require('gulp');
const prefix = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const esbuild = require('esbuild');
const esbuildSvelte = require("esbuild-svelte")

/* ----------------------------------------- */
/*  Compile Sass
/* ----------------------------------------- */

// Small error handler helper function.
function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

async function buildCode() {
  return esbuild.build({
    entryPoints: ["./module/vagabonds.js"],
    bundle: true,
    outfile: `./dist/vagabonds.js`,
    sourcemap: true,
    minify: false,
    format: "esm",
    platform: "browser",
    plugins: [esbuildSvelte()]
  });
}
const build = gulp.series(buildCode);
exports.build = build;

const SYSTEM_SCSS = ["scss/**/*.scss"];
const STSTEM_JS = ["module/**/*.js", "module/*.js", "module/**/*.svelte"];

function compileScss() {
  // Configure options for sass output. For example, 'expanded' or 'nested'
  let options = {
    outputStyle: 'expanded'
  };
  return gulp.src(SYSTEM_SCSS)
    .pipe(
      sass(options)
        .on('error', handleError)
    )
    .pipe(prefix({
      cascade: false
    }))
    .pipe(gulp.dest("./css"))
}
const css = gulp.series(compileScss);

/* ----------------------------------------- */
/*  Watch Updates
/* ----------------------------------------- */

function watchUpdates() {
  gulp.watch(STSTEM_JS, build);
}

/* ----------------------------------------- */
/*  Export Tasks
/* ----------------------------------------- */

exports.default = gulp.series(
  buildCode,
  watchUpdates
);
exports.css = css;



