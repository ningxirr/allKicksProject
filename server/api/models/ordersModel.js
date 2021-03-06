'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var OrdersSchema = new Schema({
    customerId: {
        type: String,
        Required: 'Please enter'
    },
    order: [{
        productId: {
            type: String,
            Required: 'Please enter'
        },
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
        },
        qty:{
            type: Number,
            Required: 'Please enter'
        },
        size:{
            type: Number,
            Required: 'Please enter'
        }
    }],
    subtotal: {
        type: Number
    },
    shipping: {
        type: Number
    },
    total: {
        type: Number
    },
})

module.exports = mongoose.model('orders', OrdersSchema) 