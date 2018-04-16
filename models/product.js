//global.db = require('../libs/db/db.js')();
var mongoose = require('mongoose');
var db = global.db;
var Schema = mongoose.Schema;



var productSchema = new Schema({
    productPath: {type: String, required: true},
    productName: {type: String, required: true},
    productDescription: {type: String, required: true},
    productPrice: {type: Number, required: true}
});

module.exports = mongoose.model('Product', productSchema);