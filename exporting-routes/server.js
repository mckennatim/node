var express = require('express') 
var app= express();

var routes = require('./routes');

app.get('/api', function (req,res){
	res.send("<h4>in /api</h4>")
})

app.use('/api', routes);

app.get('/', function (req, res) {
    res.send("<h4>in /</h4>");
});


app.listen(3070)
console.log('server running on 3070')