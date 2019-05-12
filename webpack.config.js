var path = require('path');

var _default = function _default() {
  return {
    mode: 'production',
    entry: './index.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'is-x-doge.js',
      libraryTarget: 'umd',
      globalObject: 'this',
      // libraryExport: 'default',
      library: 'isXDoge'
    },
    optimization: {
      minimize: false,
    },
    externals: {
      'lodash': {
        commonjs: 'lodash',
        commonjs2: 'lodash',
        amd: 'lodash',
        root: '_'
      }
    }
  };
};

exports.default = _default;
