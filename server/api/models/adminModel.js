'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var AdminSchema = new Schema({
    email:{
        type: String,
        Required: 'Please enter'
    },
    password: {
        type: String,
        Required: 'Please enter'
    }
})

module.exports = mongoose.model('admin', AdminSchema)