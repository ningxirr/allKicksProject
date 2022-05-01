'use strict'
var mongoose = require('mongoose')
Product = mongoose.model('products')

exports.listAllProducts = function(req, res){
    Product.find({}, null, function(err, product){
        if(err) throw err
        res.json(product)
    })
}

exports.readAProduct = function(req, res){
    Product.findById(req.params.productId, function(err, product){
        if(err) throw err
        res.json(product)
    })
}