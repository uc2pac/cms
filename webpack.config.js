var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ENV = process.env.ENV = 'development';
var HOST = process.env.HOST || 'localhost';
var PORT = process.env.PORT || 8080;
var npmRoot = __dirname + '/node_modules';
var appDir = __dirname + '/client';
 
var metadata = {
  host: HOST,
  port: PORT,
  ENV: ENV
};
 
/*
 * config
 */
module.exports = {
  // static data for index.html
  metadata: metadata,
 
  // Emit SourceMap to enhance debugging
  devtool: 'source-map',
 
  devServer: {
    // This is required for webpack-dev-server. The path should
    // be an absolute path to your build destination.
    outputPath: path.join(__dirname, 'dist'),
    inline: true,
    colors: true,
    publicPath: '/',
    historyApiFallback: true
  },
 
  // Switch loaders to debug mode
  debug: true,
 
  // Our angular app
  entry: {
    'polyfills': path.resolve(__dirname, "client/vendors.ts"),
    'app': path.resolve(__dirname, "client/bootstrap.ts")
  },
 
  // Config for our build file
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].bundle.js',
    sourcemapFilename: '[name].map'
  },
 
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['', '.ts', '.tsx', '.js', '.css']
  },
 
  module: {
    loaders: [
      // Support for .ts files
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        include: [ path.resolve(__dirname, "./client") ]
      },
      // Support for .html as raw text
      {
        test: /\.html$/,
        loader: 'raw-loader',
        exclude: [ path.resolve(__dirname, "client/index.html") ]
      },
      {
          test: /^(?!.*\.min\.css$).*\.css$/,
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap')
      },
      {
          test: /\.scss$/, loaders: ['style-loader',
          ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap'),
          'sass-loader' +
          '?outputStyle=expanded&' +
          'root=' + appDir + '&' +
          '&includePaths[]' + npmRoot + '&' +
          '&includePaths[]' + appDir
      ]},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader'},
      {
          test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'file-loader?mimetype=application/font-woff&name=[path][name].[ext]'
      },
      {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'file-loader?mimetype=application/x-font-ttf&name=[path][name].[ext]'
      },
      {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?\??$/,
          loader: 'file-loader?mimetype=application/vnd.ms-fontobject&name=[path][name].[ext]'
      },
      {
          test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'file-loader?mimetype=application/font-otf&name=[path][name].[ext]'
      }
    ],
    noParse: [
        /\.min\.js/,
        /vendor\/.*?\.(js|css)$/
    ]
  },
 
  plugins: [
    // Copy static assets to the build folder
    new CopyWebpackPlugin([{ from: 'client/assets', to: 'assets' }]),
    // Generate the index.html
    new HtmlWebpackPlugin({ template: 'client/index.html' }),
    new ExtractTextPlugin('client/styles.css'),
  ]
}