var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/stuffDb', function (error) {
    if (error) {console.log(error);}
});
var Schema = mongoose.Schema
var UserSchema = new Schema({
    name: {type:String, index:{unique: true}},
    apikey: String,
    email: String
}, { strict: false });

module.exports = mongoose.model('users', UserSchema);