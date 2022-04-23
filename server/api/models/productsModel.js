'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ProductsSchema = new Schema({
    name: {
        type: String,
        Required: 'Please enter'
    },
    description: {
        type: String,
        Required: 'Please enter'
    },
    price: {
        type: String,
        Required: 'Please enter'
    },
    image:{
        type: Date,
        default :Date.now //default ไม่ต้อง required
    },
})

module.exports = mongoose.model('products', ProductsSchema) 