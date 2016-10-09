//var proxy = require('http-proxy-middleware');
//app = proxy({target: 'https://ruby-china.org/', changeOrigin: true});
//app.listen(3000);
//
var express = require('express');
var proxy = require('http-proxy-middleware');

var app = express();

app.use('/api', proxy({target: 'https://ruby-china.org/', changeOrigin: true}));
app.listen(3000);

