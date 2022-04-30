'use strict'
var mongoose = require('mongoose')
Order = mongoose.model('orders')

exports.showOrderById = function(req, res){
    var OrderProductData = {}
    // var productList = []
    var subtotal = 0
    var shipping = 10
    var total = 0
    
    Order.findOne({custId: req.params.custId}, function(err, order){
        if(err) throw err
        // console.log(order.order.productId)

        var productList = order.order.filter(obj => {
            return obj
        })
        // console.log(productList[0])
        
        async function loadData() {
            /* calSubtotal().then(subtotal =>{
                console.log("calsub")
                add(subtotal)
            }) */
            await calSubtotal()
            await sendtoWeb(subtotal)
        }
        loadData()

        function calSubtotal(){
            console.log("calSubtotal")
            for(var i=0; i<productList.length; i++){
                Product.findById(productList[i].productId, function(err, product){
                    if(err) throw err
                    
                    // console.log(productList[0].qty)
                    subtotal += (parseInt(product.price)*parseInt(productList[0].qty))
                    OrderProductData = product
                    console.log(`product = ${OrderProductData}`)
                    // OrderProductData = product
                    console.log(`product = ${subtotal}`)
                })
            }
            return subtotal
        }
        function sendtoWeb(subtotal) {
            console.log(`sendtoWeb subtotal = ${subtotal}`)
            // OrderProductData = {...contactData, order: [order.push(orderProduct)]}
            // OrderProductData = {...OrderProductData, }
            OrderProductData['subtotal'] = parseInt(subtotal)
            OrderProductData['shipping'] = shipping
            OrderProductData['total'] = total
            console.log(`OrderProductData = ${OrderProductData}`)
            res.json(OrderProductData)
        }

        /* for(var i=0; i<productList.length; i++){
            Product.findById(productList[i].productId, function(err, product){
                if(err) throw err
                // console.log(`product = ${product}`)
                // console.log(productList[0].qty)
                subtotal += (parseInt(product.price)*parseInt(productList[0].qty))
                OrderProductData = product
                console.log(`product = ${subtotal}`)
            })
        } */

        // OrderProductData['subtotal'] = subtotal
        // OrderProductData['shipping'] = shipping
        // OrderProductData['total'] = total

        // res.json(OrderProductData)
    })
}

exports.customerOrder = function(req, res){
    console.log("\ncustomerOrder")
    var orderinfo = {}
    orderinfo = req.body
    var orderData = {}

    const filter = {custId: req.params.custId}
    Order.findOne(filter, function(err, order){
        if(err) throw err
        orderData = order
        
        if(order == null){
            console.log("null order")
            var newCustOrder = new Order({
                customerId: req.params.custId,
                order: [orderinfo]
            })
            // console.log(newCustOrder)
            newCustOrder.save(function(err, new_cos_order){
                if(err) throw err
                res.json(new_cos_order)
            })
        }else{
            var orderList = orderData.order.filter(obj => {
                return obj
            })
            // console.log(`orderList ${orderList[2].productId}`)
            // console.log(`orderinfo ${orderinfo.productId}`)

            // for(var i=0; i<orderList.length; i++){
            //     if(orderList[i].productId == orderinfo.productId){
            //         orderList[i].qty = parseInt(orderList[i].qty)+parseInt(orderinfo.qty)
            //         console.log(`same order ${orderList}`)
            //         orderData.order.qty = orderList[i].qty
            //     }/* else{
            //         orderData.order.push(orderinfo)
            //         console.log(`new order ${orderData}`)
            //     } 
            //     else(orderList[i].productId != orderinfo.productId){
            //         console.log("new")
            //         orderData.order.push(orderinfo)
            //     }*/
            // }
            for(var i=0; i<orderList.length; i++){
                if(orderList[i].productId != orderinfo.productId){
                    console.log("new")
                    orderData.order.push(orderinfo)
                }
                else{
                    orderList[i].qty = parseInt(orderList[i].qty)+parseInt(orderinfo.qty)
                    console.log(`same order ${orderList}`)
                    orderData.order.qty = orderList[i].qty
                }
            }
            setTimeout(()=>{
                Order.findOneAndUpdate(filter, orderData, {new: true}, function(err, orderData){
                    if(err) throw err
                    res.json(orderData)
                })
            },1000)
            /* Order.findOneAndUpdate(filter, orderData, {new: true}, function(err, orderData){
                if(err) throw err
                res.json(orderData)
            }) */
        }
    })
}