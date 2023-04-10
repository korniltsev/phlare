const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  devtool: 'eval-source-map',
  mode: 'development',
  devServer: {
    port: 4040,
    proxy: {
      '/pyroscope': 'http://localhost:4100',
    },
  },
  optimization: {
    runtimeChunk: 'single',
  },
});