'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ContactSchema = new Schema({
    email:{
        type: String,
        Required: 'Please enter'
    },
    firstName: {
        type: String,
        Required: 'Please enter'
    },
    lastName: {
        type: String,
        Required: 'Please enter'
    },
    company: {
        type: String
    },
    address: {
        type: String,
        Required: 'Please enter'
    },
    apartment:{
        type: String
    },
    city:{
        type: String,
        Required: 'Please enter'
    },
    country:{
        type: String,
        Required: 'Please enter'
    },
    postal:{
        type: String,
        Required: 'Please enter'
    },
    phone:{
        type: String
    },
    history:[{
        productId:{
            type: String
        },
        createdDate:{
            type: Date,
            default :Date.now //default ไม่ต้อง required
        }
    }]
})

module.exports = mongoose.model('contacts', ContactSchema)