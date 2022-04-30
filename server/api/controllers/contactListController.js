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
    Contact.findOne({email: req.params.contactEmail}, function(err, contact){
        if(err) throw err
        console.log(`showOneContactByEmail ${contact}`)
        res.json(contact)
    })
}

exports.editAContact = function(req, res){
    var contactUser = {}
    contactUser = req.body
    // console.log(`editbefore ${req.params.contactEmail}`)
    Contact.findOneAndUpdate({email: req.params.contactEmail}, contactUser, {new: true}, function(err, contact){
        if(err) throw err
        console.log(`edit ${contact}`)
        res.json(contact)
    })
}

exports.addContactHistory = function(req, res){
    console.log("addContactHistory")
    console.log(`cid = ${req.params.contactId}`)
    var newProductData = req.body

    Contact.findById(req.params.contactId, function(err, contact){
        console.log("can find")
        if(err) throw err
        var oldCustData = contact
        var oldHistroryProduct = oldCustData.history.filter(product => product._id == newProductData._id)
        if (oldHistroryProduct.length == 0){
            console.log("new")
            oldCustData.history.push(newProductData)
        }
        if(oldCustData.history.length==4){
            console.log(oldCustData.history.length)
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