'use strict';

var usemin = require('usemin');

usemin('src/index.html', 'dist', {
  output: 'dist/index.html',
  config: {
    uglifyjs: {
      sourceMapInline: false,
      warnings: true,
      mangle: true,
      compress: {
        loops: true,
        unused: true
      }
    },
    cleancss: {
      advanced: true,
      keepBreaks: false,
      rebase: false
    },
    htmlminifier: {}
  },
  htmlmin: false
});
