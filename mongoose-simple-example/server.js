var express = require('express');
var User = require('./user')

var app = express();
var routes =require('./routes');
app.use('/api', routes)



app.get('/', function (req, res) {
    res.send("<a href='/users'>Show Users</a>");
});

app.get('/users/:email', function (req, res) {
    if (req.params.email) {
        User.find({ email: req.params.email }, function (err, docs) {
            res.json(docs);
        });
    }
});
app.listen(3060);
console.log('server running on 3060')
