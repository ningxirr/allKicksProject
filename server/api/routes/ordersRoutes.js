'use strict'
module.exports = function(app){
    var order = require('../controllers/ordersController')

    app.route('/orders/:custId')
        // .get(order.showOrderById)
        .post(order.customerOrder)
        .delete(order.deleteOrder)

    app.route('/orders/:custEmail')
        .get(order.showOrderById)
    // app.route('/orders/:custId/:productId/:qty')
    //     .get(order.customerOrder)

}