'use strict'
module.exports = function(app){
    var order = require('../controllers/ordersController')

    app.route('/orders/:custId')
        .get(order.showOrderById)
        .post(order.customerOrder)

    // app.route('/orders/:custId/:productId/:qty')
    //     .get(order.customerOrder)

}