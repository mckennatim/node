var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');

var app = express();
//app.engine('.html', require('ejs').renderFile);
// view engine setup
app.set('views', __dirname + '/views/');
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
/*-----------------------------setup to allow for cross domain use-----------------------------------*/
app.all('*', function(req,res,next){
    var htt= req.headers.origin;
    res.header("Access-Control-Allow-Origin", htt);
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-xsrf-token, Authorization");
    next();
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

app.get('/dog', function(req, res) {
    res.send('uli');  // <- Return the static template above
});

app.get('/', function(req,res){
    res.send('nothing here')
})

app.listen(process.env.PORT || 8092);
console.log('app running on port 8092')