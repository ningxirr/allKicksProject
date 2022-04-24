'use strict'
var mongoose = require('mongoose')
Contact = mongoose.model('contacts')

exports.showAllContact = function(req, res){
    Contact.find({}, function(err, contact){
        if(err) throw err
        console.log(contact)
        res.json(contact)
    })
}

exports.addNewContact = function(req, res){
    var newContact = new Contact(req.body)
    console.log(req.body)
    newContact.save(function(err, contact){
        if(err) throw err
        res.json(contact)
    })
}

exports.showOneContact = function(req, res){
    const filter = {email: req.params.contactEmail}
    Contact.findOne(filter, function(err, contact){
        if(err) throw err
        console.log("contact"+contact)
        res.json(contact)
    })
}

exports.editAContact = function(req, res){
    var contactUser = {}
    contactUser = req.body
    Contact.findOneAndUpdate(req.params.contactEmail, contactUser, {new: true}, function(err, contact){
        if(err) throw err
        res.json(contact)
    })
}