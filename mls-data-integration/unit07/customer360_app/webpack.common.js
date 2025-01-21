const webpack           = require('webpack');
const helpers           = require('./helpers');
const path              = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    polyfills: './src/app/polyfills.ts',
    vendor: './src/app/vendor.ts',
    app: './src/app/main.ts'
  },
  resolve: {
    extensions: ['.ts', '.js'],
    descriptionFiles: ['package.json', 'bower.json']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: ['raw-loader'],
        exclude: [/node_modules/, /bower_components/]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader'
        }),
        include: [/node_modules/, /bower_components/]
      },
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery',
      tether: 'tether',
      Tether: 'tether'
    }),
    // hides warnings
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      path.resolve(__dirname, 'src')
    )
  ]
};
