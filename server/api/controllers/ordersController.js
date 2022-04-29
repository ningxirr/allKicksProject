'use strict'
var mongoose = require('mongoose')
Order = mongoose.model('orders')

exports.showOrderById = function(req, res){
    console.log("showOrderById")
    console.log(req.params.custEmail)
    Order.findOne({email: req.params.custEmail}, function(err, customerOrder){
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
            console.log("null order")
            var newCustOrder = new Order({
                customerId: req.params.custId,
                order: [newCustomerOrder]
            })
            newCustOrder.save(function(err, new_cos_order){
                console.log("new cust create")
                if(err) throw err
                res.json(new_cos_order)
            })
        }

        else {
            var oldCustProduct = oldCustData.order.filter(order => order.productId === newCustomerOrder.productId)
            console.log(newCustomerOrder.productId)
            console.log(oldCustProduct)
            if (oldCustProduct.length == 0){
                console.log("new")
                oldCustData.order.push(newCustomerOrder)
            }
            else {
                oldCustProduct[0].qty = parseInt(oldCustProduct[0].qty)+parseInt(newCustomerOrder.qty)
                console.log(`same order ${oldCustProduct[0]}`)
                oldCustData.order.qty = oldCustProduct[0].qty
            }
            
            setTimeout(()=> {
                Order.findOneAndUpdate(filter, oldCustData, {new: true}, function(err, oldCustData){
                    console.log("update cust order")
                    if(err) throw err
                    res.json(oldCustData)
                })
            },1000)
        }
    })
}

exports.deleteOrder = function(req, res){
    console.log("\ncustomerOrder")
    var newCustomerOrder = {}
    newCustomerOrder = req.body

    const filter = {customerId: req.params.custId}

    Order.findOne(filter, function(err, order){
        if(err) throw err
        var oldCustData = order


        var oldCustProduct = oldCustData.order.filter(order => order.productId === newCustomerOrder.productId)
        oldCustData.order = oldCustData.order.filter(order => order.productId !== newCustomerOrder.productId)

        if (oldCustProduct.length !== 0){
            oldCustProduct[0].qty = oldCustProduct[0].qty - 1
            oldCustData.order.push(oldCustProduct[0])
        }
        else {
            console.log("Delete Fail")
        }
            
            setTimeout(()=> {
                Order.findOneAndUpdate(filter, oldCustData, {new: true}, function(err, oldCustData){
                    console.log("update cust order")
                    if(err) throw err
                    res.json(oldCustData)
                })
            },0)
    })
}