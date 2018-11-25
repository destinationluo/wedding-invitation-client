var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var precss = require('precss');
var autoprefixer = require('autoprefixer');

/*Extract text from bundle into a file.从bundle中提取出特定的text到一个文件中。
 使用 extract-text-webpack-plugin就可以把css从js中独立抽离出来*/
var ExtractTextPlugin = require('extract-text-webpack-plugin');

require("babel-polyfill");


// 项目根路径
var ROOT_PATH = path.join(__dirname, '..');
// 项目源码路径
var SRC_PATH = path.join(ROOT_PATH, 'src');
// 产出路径
var DIST_PATH = path.join(ROOT_PATH, 'dist');

module.exports = {
    devtool: 'source-map',
    context: SRC_PATH,
    entry: [
        './index.js',
        'babel-polyfill'
    ],
    output: {
        path: DIST_PATH,
        /*静态资源路径*/
        publicPath: "/",
        filename: '[name].[chunkhash:5].chunk.js'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            minChunks: 3
        }),
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 15
        }),
        new webpack.optimize.MinChunkSizePlugin({
            minChunkSize: 10000
        }),
        new HtmlWebpackPlugin({
            title: 'Boot React',
            template: path.join(SRC_PATH, 'index.html')
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
        new ExtractTextPlugin('[name].[contenthash:5].chunk.css')
    ],
    resolve: {
        extensions: ['', '.js'],
        root: SRC_PATH
    },
    module: {
        preLoaders: [{
            test: /\.css$/,
            loader: 'stripcomment'
        }],
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            include: SRC_PATH
        }, {
            test: /\.(scss|css)$/,
            loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
        }, {
            test: /\.json/,
            loaders: ['json-loader']
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'url-loader?limit=8192'
        }, {
            test: /\.(mp3|ogg|m4a|ttf)$/,
            loader: 'file'
        }]
    },
    postcss: function () {
        // css autoprefix
        //css 自动添加浏览器内核前缀
        return [precss, autoprefixer];
    }
};
