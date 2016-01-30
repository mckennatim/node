## readme

This is a pretty basic server. Real basic would be...

    var express = require('express');
    var app = express();
    app.get('/', function(req, res) {
      res.send('hello world');
    });

This server has 3 files, server.js, app.js and ./modules/blank/routes.js

server.js

    var http = require('http')
    var app= require('./app');
    app.set('port', process.env.PORT || 3072);
    var server = http.createServer(app);
    server.listen(app.get('port'), function(){
        console.log('Express server listening on port ' + server.address().port);
    });

app.js

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

./modules/blank/routes.js

    var express = require('express');
    module.exports = (function() {
        'use strict';
        var router = express.Router();
        router.get('/dog', function(req, res) {
            res.send('a dffog');
        });
        return router;
    })();

This setup has a way to incorporate modules and is set up to allow running socket.io with these additions to `server.js`

    var io = require('socket.io')(server);
    require('./modules/io/sio')(io);

Modules can be incorporated by importing them into `app.js`. `var blank = require('./modules/blank/routes');`  imports the blank module and `app.use('/api', blank);`  tags its routes on to `/api`. `./modules/blank/routes` has module.export with and immediately invoked function expression (IIFE) that returns a router to extend existing routes with the routes from the moodule


