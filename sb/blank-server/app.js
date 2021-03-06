var express = require('express');
var logger = require('morgan');//logs GET/ 304 12ms
var blank = require('./modules/blank/routes');

var app = express();
app.use(logger('dev'));

app.get('/', function(req, res) {
  res.send('hello world');
});

app.get('/api', function (req,res){
	res.send("<h4>in /api</h4>")
});
app.use('/api', blank);

module.exports = app;