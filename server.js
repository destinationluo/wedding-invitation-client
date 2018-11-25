var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack/webpack.dev.config');
var history = require('connect-history-api-fallback');
var proxy = require('http-proxy-middleware');

var app = express();
var compiler = webpack(config);

app.use(history());

app.use(proxy('/wedding', {
    target: 'http://192.168.199.206:80',
    changeOrigin: true
}));

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));
app.use('/asset', express.static(__dirname + '/src/asset'));
// app.get('*', function (request, response){
//     response.sendFile(path.resolve(__dirname, 'assets', 'index-template.html'))
// });

app.listen(8081, '0.0.0.0', (err) => {
// app.listen(8081, (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Listening at http://localhost:8081');
});
