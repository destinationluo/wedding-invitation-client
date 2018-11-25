var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var precss = require('precss');
var autoprefixer = require('autoprefixer');

// 项目根路径
var ROOT_PATH = path.join(__dirname, '..');
// 项目源码路径
var SRC_PATH = path.join(ROOT_PATH, 'src');
// 产出路径
var DIST_PATH = path.join(ROOT_PATH, 'dist');

module.exports = {
    devtool: 'inline-source-map',
    context: SRC_PATH,
    entry: [
        'webpack-hot-middleware/client',
        'babel-polyfill',
        './index.js'
    ],
    output: {
        path: DIST_PATH,
        filename: 'bundle.js',
        publicPath: 'http://192.168.199.206:8081/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify('development')
            }
        }),
        new HtmlWebpackPlugin({
            title: 'Boot React',
            template: path.join(SRC_PATH, 'index.html')
        })
    ],
    resolve: {
        extensions: ['', '.js'],
        root: SRC_PATH
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel?cacheDirectory'],
            include: SRC_PATH
        }, {
            test: /\.(scss|css)$/,
            loaders: ['style', 'css', 'postcss', 'sass']
        }, {
            test: /\.json/,
            loaders: ['json-loader']
        }, {
            test: /\.(png|jpg|gif)$/,
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
