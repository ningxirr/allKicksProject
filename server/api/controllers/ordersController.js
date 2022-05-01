'use strict'
var mongoose = require('mongoose')
Order = mongoose.model('orders')

exports.showOrderById = function(req, res){
    console.log("showOrderById")
    console.log(req.params.customerId)
    Order.findOne({customerId: req.params.custId}, function(err, customerOrder){
        if(err) throw err
        console.log(customerOrder)
        res.json(customerOrder)
    })
}

exports.customerOrder = function(req, res){
    console.log("\ncustomerOrder")
    var newCustomerOrder = {}
    newCustomerOrder = req.body
    const filter = {customerId: req.params.custId}
    Order.findOne(filter, function(err, order){
        if(err) throw err
        var oldCustData = order
        if(oldCustData == null){
            var newCustOrder = new Order({
                customerId: req.params.custId,
                order: [newCustomerOrder]
            })
            newCustOrder.save(function(err, new_cos_order){
                if(err) throw err
                res.json(new_cos_order)
            })
        }
        else {
            var oldCustProduct = oldCustData.order.filter(order => order.productId === newCustomerOrder.productId && order.size === newCustomerOrder.size)
            console.log(newCustomerOrder.productId)
            console.log(oldCustProduct)
            if (oldCustProduct.length == 0){
                oldCustData.order.push(newCustomerOrder)
            }
            else {
                oldCustProduct[0].qty = parseInt(oldCustProduct[0].qty)+parseInt(newCustomerOrder.qty)
                oldCustData.order.qty = oldCustProduct[0].qty
            }
            
            setTimeout(()=> {
                Order.findOneAndUpdate(filter, oldCustData, {new: true}, function(err, oldCustData){
                    if(err) throw err
                    res.json(oldCustData)
                })
            },1000)
        }
    })
}

exports.updateOrder = function(req, res){
    console.log("\ncustomerUpdateQty")
    var newCustomerOrder = {}
    newCustomerOrder = req.body

    const filter = {customerId: req.params.custId}
    console.log(req.params.custId)

    Order.findOne(filter, function(err, order){
        if(err) throw err
        var oldCustData = order
        console.log(newCustomerOrder.size)
        var oldCustProduct = oldCustData.order.filter(order => order.productId == newCustomerOrder.productId && order.size === newCustomerOrder.size)
        oldCustData.order = oldCustData.order.filter(order => !(order.productId == newCustomerOrder.productId && order.size === newCustomerOrder.size))
        if (oldCustProduct.length !== 0 && newCustomerOrder.qty!==0){
            console.log("Update Complete")
            console.log(newCustomerOrder.qty)
            oldCustProduct[0].qty = newCustomerOrder.qty
            oldCustData.order.push(oldCustProduct[0])
        }
        else {
            console.log("Delete")
        }  
        setTimeout(()=> {
            Order.findOneAndUpdate(filter, oldCustData, {new: true}, function(err, oldCustData){
                console.log("update cust order")
                if(err) throw err
                console.log("change qty to "+ oldCustProduct[0].qty)
                res.json(oldCustData)
            })
        },0)
    }) 
}