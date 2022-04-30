'use strict'
module.exports = function(app){
    var order = require('../controllers/ordersController')

    app.route('/orders/:custId')
        .get(order.showOrderById)
        .post(order.customerOrder)
        .delete(order.deleteOrder)

}