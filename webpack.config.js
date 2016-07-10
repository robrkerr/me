var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var DEV_MODE = process.env.NODE_ENV === 'development';

var plugins = [];

if (!DEV_MODE) {
  plugins = plugins.concat([
      new webpack.optimize.DedupePlugin(),
      // new webpack.optimize.UglifyJsPlugin({
      //   minimize: true,
      //   compressor: {
      //     warnings: false,
      //   },
      // }),
      new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('production'),
      }),
  ]);
}

module.exports = {
  devtool: DEV_MODE ? 'cheap-module-eval-source-map' : undefined,
  entry: {
    main: './src/index.js'
  },

  output: {
    path: path.resolve(__dirname, "public"),
    publicPath: "/",
    filename: "bundle.js",
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      { test: /\.css$/, loaders: ['style?sourceMap', 'css?sourceMap'] },
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.svg$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" }
    ]
  },

  resolve: {
    modulesDirectories: ['node_modules']
  },

  plugins: plugins
};
