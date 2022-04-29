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
        type: Number,
        Required: 'Please enter'
    },
    image:{
        type: String,
        Required: 'Please enter'
    }
})

module.exports = mongoose.model('products', ProductsSchema) 