var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var fs = require('fs');

var DEV_MODE = process.env.NODE_ENV === 'development';

var plugins = [
  new ExtractTextPlugin('styles.css', { allChunks: true })
];

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
