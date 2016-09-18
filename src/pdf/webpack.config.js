var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var fs = require('fs');

var plugins = [
  new ExtractTextPlugin('styles.css', { allChunks: true })
];

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    main: './src/pdf/index.js'
  },

  output: {
    path: path.resolve(__dirname, "src/pdf"),
    publicPath: "/",
    filename: "bundle.js",
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader') },
      { test: /\.svg$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" }
    ]
  },

  postcss: [
    require('autoprefixer-core')
  ],

  resolve: {
    modulesDirectories: ['node_modules']
  },

  plugins: plugins
};
