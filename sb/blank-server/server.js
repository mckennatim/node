var http = require('http')
var app= require('./app');

app.set('port', process.env.PORT || 3072);
var server = http.createServer(app);

server.listen(app.get('port'), function(){
	console.log('Express server listening on port ' + server.address().port);
});
