var express = require('express')
var User = require('./user')
//var app =express()

module.exports = (function(){
	var router = express.Router()

	router.get('/users', function (req, res) {
	    User.find({}, function (err, docs) {
	        res.send(docs);
	    });
	});
	router.get('/loser', function (req, res) {
	        res.send('you are such a ');
	});
	router.get('/save', function (req,res) {
		var user = new User({
			name:  'fred',
			email: 'fred@gmail.com'
		})
		user.save( function(err){
			if (err){
				console.log('wtf')
			}else{
				console.log('is saved')
			}
		})
		res.send('you are save');
	})
	return router;
})();
