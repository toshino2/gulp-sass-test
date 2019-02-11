// gulpプラグインの読み込み
const gulp = require('gulp');
// Sassをコンパイルするプラグインの読み込み
const sass = require('gulp-sass');
var frontNote = require('gulp-frontnote');

// style.scssの監視タスクを作成する
gulp.task('default', function () {
  // ★ style.scssファイルを監視
  return gulp.watch('css/style.scss', function () {
    // style.scssの更新があった場合の処理

    // style.scssファイルを取得
    return gulp.src('css/style.scss')
      // Sassのコンパイルを実行
      .pipe(sass({
        outputStyle: 'expanded'
      })
        // Sassのコンパイルエラーを表示
        // (これがないと自動的に止まってしまう)
        .on('error', sass.logError))
      // cssフォルダー以下に保存
      .pipe(gulp.dest('css'));
  });
});

gulp.task('doc', function () {
  return gulp.src('css/**/*.scss')
    .pipe(frontNote({
      out: './_styleguide',
      css: ['../css/style.css']
    }));
});

gulp.task('sass', function () {
  return gulp.src('css/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'));
});

