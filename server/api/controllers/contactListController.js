'use strict'
var mongoose = require('mongoose')
Contact = mongoose.model('contacts')

exports.showAllContact = function(req, res){
    console.log("showAllContact")
    Contact.find({}, function(err, contact){
        if(err) throw err
        res.json(contact)
    })
}

exports.addNewContact = function(req, res){
    console.log("addNewContact")
    var newContact = new Contact(req.body)
    newContact.save(function(err, contact){
        if(err) throw err
        res.json(contact)
    })
}

exports.showOneContact = function(req, res){
    console.log("showOneContact")
    console.log(req.params.contactId)
    Contact.findById(req.params.contactId, function(err, contact){
        if(err) throw err
        res.json(contact)
    })
}

exports.addContactHistory = function(req, res){
    console.log("addContactHistory")
    var newProductData = req.body
    Contact.findById(req.params.contactId, function(err, contact){
        if(err) throw err
        var oldCustData = contact
        var oldHistroryProduct = oldCustData.history.filter(product => product._id == newProductData._id)
        if (oldHistroryProduct.length == 0){
            oldCustData.history.push(newProductData)
        }
        if(oldCustData.history.length==4){
            oldCustData.history.shift()
        }
        setTimeout(()=> {
            Contact.findByIdAndUpdate(req.params.contactId, oldCustData, {new: true}, function(err, contactData){
            if(err) throw err
            res.json(contactData)
        }) 
        },1000)
    })
}

exports.editAContact = function(req, res){
    console.log("editAContact")
    var contactUser = {}
    contactUser = req.body
    Contact.findOneAndUpdate({email: req.params.contactEmail}, contactUser, {new: true}, function(err, contact){
        if(err) throw err
        res.json(contact)
    })
}

exports.showOneContactByEmail = function(req, res){
    console.log("showOneContactByEmai")
    Contact.findOne({email: req.params.contactEmail}, function(err, contact){
        if(err) throw err
        res.json(contact)
    })
}



