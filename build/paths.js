var appRoot = 'src/';
var outputRoot = 'dist/';
var exportSrvRoot = 'export/';

module.exports = {
  root: appRoot,
  source: appRoot + '**/*.js',
  html: appRoot + '**/*.html',
  scss: appRoot + '**/*.scss',
  css: 'styles/',
  style: 'styles/**/*.css',
  output: outputRoot,
  exportSrv: exportSrvRoot,
  doc: './doc',
  test: 'test/**/*.js'
};
