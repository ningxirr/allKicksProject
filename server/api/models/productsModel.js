'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ProductsSchema = new Schema({
    name: {
        type: String,
        Required: 'Please enter'
    },
    description1: {
        type: String,
        Required: 'Please enter'
    },
    description2: {
        type: String,
        Required: 'Please enter'
    },
    price: {
        type: Number,
        Required: 'Please enter'
    },
    img:{
        type: String,
        Required: 'Please enter'
    }
})

module.exports = mongoose.model('products', ProductsSchema) 