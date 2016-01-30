var http = require('http')
var express = require('express');
var logger = require('morgan');//logs GET/ 304 12ms

var app = express();
app.use(logger('dev'));

app.get('/', function(req, res) {
  res.send('hello world');
});

app.get('/api', function (req,res){
	res.send("<h4>in /api</h4>")
});

app.set('port', process.env.PORT || 3072);
var server = http.createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(ws){
	console.log('somebody connected')
	ws.on('switchLid', function(lid) {
		ws.leave(ws.rooms[0])
		console.log('joined: ' + lid)
		ws.join(lid, function() {
			console.log(ws.rooms)
		});
	});
	ws.on('message', function incoming(message) {
		console.log(message)
		console.log(ws.rooms[0])
		ws.emit('itemChanged', message)			
	});		
	ws.on('message to room', function incoming(message) {
		console.log(message)
		console.log(ws.rooms[0])
		io.to(ws.rooms[0]).emit('roomMessage', message)			
	});		
});

server.listen(app.get('port'), function(){
	console.log('Express server listening on port ' + server.address().port);
});
