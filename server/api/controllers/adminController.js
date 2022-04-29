'use strict'
var mongoose = require('mongoose')
Admin = mongoose.model('admin')

exports.checkAdmin = function(req, res){
    const filter = {username: req.params.email}
    Admin.findOne(filter, function(err, admin){
        if(err) throw err
        console.log("login admin"+admin)
        res.json(admin)
    })
}

exports.addProduct = function(req, res){
    var newProduct = new Product(req.body)
    console.log(req.body)
    newProduct.save(function(err, product){
        if(err) throw err
        res.json(product)
    })
}