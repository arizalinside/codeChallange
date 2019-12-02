var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    Name: String,
    Price: String,
    Stock: Number,
    Image: String
})

module.exports = mongoose.model('Product', productSchema);