var glob = require('glob'),
    webpack = require('webpack'),
    path = require('path'),
    WriteFileWebpackPlugin = require('write-file-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    devServer = {
        outputPath: path.join(__dirname, './public'),
        colors: true,
        quiet: false,
        noInfo: false,
        publicPath: '/static/',
        historyApiFallback: true,
        host: '127.0.0.1',
        port: 8000,
        hot: false
    };
require('es6-promise').polyfill();

module.exports = {
    // devtool: 'source-map',
    debug: false,
    devServer: devServer,
    entry: {
      login: glob.sync('./pages/login.js'),
      home: glob.sync('./pages/home.js'),
      newmongodb: glob.sync('./pages/newmongodb.js'),
      mongobackup: glob.sync('./pages/mongobackup.js'),
      mongorecovery: glob.sync('./pages/mongorecovery.js'),
      error: glob.sync('./pages/error.js'),

    },
    output: {
        path: devServer.outputPath,
        filename: "[name].js",
        publicPath: devServer.publicPath
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel?presets[]=react,presets[]=es2015'
        },
        { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") }
      ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new WriteFileWebpackPlugin()
    ]
};
