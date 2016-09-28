'use strict'
var gulp = require('gulp'),
    jade = require('gulp-jade'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    concatCss = require('gulp-concat-css'),
    concat = require('gulp-concat'),
    cleanCSS = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    pump = require('pump'),
    clean = require('gulp-clean'),
    notify = require('gulp-notify'),
    rename = require('gulp-rename'),


    //sprite = require('gulp-sprite-generator'),
    spritesmith = require('gulp.spritesmith'),

    svgSprite = require("gulp-svg-sprites"),
    imageop = require('gulp-image-optimization'),
    imageminMozjpeg = require('imagemin-mozjpeg'),

    mainBowerFiles = require('gulp-main-bower-files'),

    browserSync = require('browser-sync').create();

/*
********************************************************************************
  Concat all js file
********************************************************************************
*/
gulp.task('compress', function (cb) {
  var options = {
    mangle: false,
    compress: false,
    output: { beautify: true }
  }
  pump([
        gulp.src('app/js/*.js'),
        sourcemaps.init(),
        uglify(options),
        concat('main.js'),
        //rename({suffix: '.min'}),
        sourcemaps.write(),
        gulp.dest('dist/js')
    ],
    cb
  );
});

/*
********************************************************************************
  server
********************************************************************************
*/
gulp.task('serve', function() {
  browserSync.init({
    server: "dist/"
  });
  return browserSync.watch('dist/').on('change', browserSync.reload);
});

/*
********************************************************************************
  jade
********************************************************************************
*/
gulp.task('jade', function() {
  return gulp.src('app/jade/*.jade').pipe(jade({
    pretty: true
  }).on('error', notify.onError())).pipe(gulp.dest('dist'));
});

/*
********************************************************************************
  sass
********************************************************************************
*/
gulp.task('sass', function() {
  return gulp.src('app/sass/*.sass').pipe(sourcemaps.init()).pipe(sass({
    outputStyle: 'expanded'
  }).on('error', notify.onError()))
  .pipe(autoprefixer('last 2 version', '> 1%', 'IE 9')).pipe(sourcemaps.write())
  //.pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('dist/css'));
});


/*
********************************************************************************
  create svg file
********************************************************************************
*/
gulp.task('svg', function() {
  var options;
  options = {
    baseSize: 30,
    padding: 5,
    preview: false,
    templates: {
      scss: true
    },
    cssFile: "../../../app/sass/_sprite.scss"
  };
  return gulp.src('app/svg/**/*.svg')
    .pipe(svgSprite(options))
    .pipe(gulp.dest('dist/'));
});


/*
********************************************************************************
  create png sprite
********************************************************************************
*/
gulp.task('sprite', function() {
    var spriteData =
        gulp.src('app/images/icons/*.png') // путь, откуда берем картинки для спрайта
            .pipe(spritesmith({
                imgName: 'sprite.png',
                cssFormat: 'sass',
                imgPath: '../images/icons/sprite.png',
                cssName: '_spritePng.sass',
                algorithm: 'binary-tree',
                cssVarMap: function(sprite) {
                    sprite.name = '' + sprite.name
                }
            }));

    spriteData.img.pipe(gulp.dest('dist/images/icons')); // путь, куда сохраняем картинку
    spriteData.css.pipe(gulp.dest('app/sass/')); // путь, куда сохраняем стили
});
/*
********************************************************************************
  compress images file
********************************************************************************
*/
gulp.task('images', function(cb) {
  gulp.src(['app/images/**/*.jpg','app/images/**/*.png'])

  .pipe(imageop({
    plugins: [imageminMozjpeg()],
    optimizationLevel: 5,
    progressive: true,
    interlaced: true
  })).pipe(gulp.dest('dist/images/upload')).on('end', cb).on('error', cb);
});

/*
********************************************************************************
  copy bower file
********************************************************************************
*/
gulp.task('bower', function() {
  gulp.src('./bower.json').pipe(mainBowerFiles({
    overrides: {
      almond: {
        "ignore": true
      },
      jquery: {
        main: ["./dist/jquery.min.js"]
      },
      "materialize": {
        main: ["./js/leanModal.js", "./**/velocity.min.js"]
      },
      // ver. 2.1.6
      "owl.carousel":{
        main: ["./dist/*.min.js", "./dist/assets/*.min.css", "./dist/assets/*.gif"]
      },
      // ver. 1.3.2
      "OwlCarousel":{
        main: ["./owl-carousel/*.min.js", "./owl-carousel/*.css", "./owl-carousel/*.gif", "./owl-carousel/*.png"]
      },
      "paginationjs":{
        main: ["./**/*.min.js", "./**/*.css"]
      }
    }
  })).pipe(gulp.dest('dist/lib'));
});
/*
********************************************************************************
  watchers
********************************************************************************
*/
gulp.task('watch', function() {
  gulp.watch('app/jade/**/*.jade', ['jade']);
  gulp.watch('app/sass/**/*{scss,sass}', ['sass']);
  gulp.watch('app/js/*.js', ['compress']);
});


gulp.task('compress:pr', function (cb) {
  var options = {
    mangle: true,
    compress: true,
    output: { beautify: false }
  }
  pump([
        gulp.src('app/js/*.js'),
        uglify(options),
        rename({suffix: '.min'}),
        gulp.dest('dist/js')
    ],
    cb
  );
});

/*==============================================================================
Build Production
==============================================================================*/
gulp.task('jade:pr', function() {
  return gulp.src('app/jade/*.jade').pipe(jade({
    pretty: false
  }).on('error', notify.onError())).pipe(gulp.dest('dist'));
});


gulp.task('sass:pr', function() {
  return gulp.src('app/sass/*.sass').pipe(sass({
    outputStyle: 'compressed'
  }).on('error', notify.onError()))
  .pipe(autoprefixer('last 2 version', '> 1%', 'IE 9'))
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('dist/css'));
});

gulp.task('vendor:css', function() {
  return gulp.src('dist/lib/**/**/*.css')
  .pipe(concatCss('dist/css/bundle.css'))
  .pipe(gulp.dest('out/'))
  .pipe(concatCss('vendor.css'))
  .pipe(cleanCSS())
  .pipe(gulp.dest('dist/css'));
});

gulp.task('vendor:js', function(cb) {
      pump([
          gulp.src('dist/lib/**/**/*.js'),
          uglify(),
          //rename({suffix: '.min'}),
          concat('all.js'),
          gulp.dest('dist/js')
      ],
      cb
    )
});



gulp.task('production', ['sass:pr', 'compress:pr', 'jade:pr']);
gulp.task('default', ['jade', 'sass', 'compress', 'watch', 'serve']);

