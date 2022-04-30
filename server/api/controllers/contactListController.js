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
    console.log(req.params.contactId)
    Contact.findById(req.params.contactId, function(err, contact){
        if(err) throw err
        console.log("contact"+contact)
        res.json(contact)
    })
}

exports.showOneContactByEmail = function(req, res){
    console.log(req.params.contactId)
    Contact.findOne({custId: req.params.contactEmail}, function(err, contact){
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

exports.addContactHistory = function(req, res){
    console.log("addContactHistory")
    console.log(`cid = ${req.params.contactId}`)
    var contactHistory = req.body
    var contactData = {}

    Contact.findById(req.params.contactId, function(err, contact){
        console.log("can find")
        if(err) throw err
        contactData = contact
        contactData.history.push(contactHistory)

        Contact.findByIdAndUpdate(req.params.contactId, contactData, {new: true}, function(err, contactData){
            if(err) throw err
            res.json(contactData)
        }) 
    })
}

exports.addContactProduct = function(req, res){
    var contactData = {}
    var orderProduct = req.body

    Contact.findById(req.params.contactId, function(err, contact){
        if(err) throw err
        console.log("contact"+contact)
        contactData = contact
        // res.json(contact)
    })

    // contactData = {...contactData, order: [{orderProduct}]}
    // contactData = {...contactData, order: {order.push(orderProduct)} }
    // contactData.order = order.push(orderProduct)
    // contactData = {...contactData, order: [order.push(orderProduct)]}
    contactData = {...contactData, order: []}
    contactData.order.push(orderProduct)
    
    Contact.findByIdAndUpdate(req.params.contactId, contactData, {new: true}, function(err, contact){
        if(err) throw err
        res.json(contact)
    })
}