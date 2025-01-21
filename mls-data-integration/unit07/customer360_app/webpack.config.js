const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: `${__dirname}/public/dist`,
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  }
});
