var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    firstName: String,
    lastName: String,
    birthYear: Date,
    Email: String
})

module.exports = mongoose.model('User', userSchema);