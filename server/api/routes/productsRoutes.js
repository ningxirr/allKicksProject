'use strict'
module.exports = function(app){
    var productList = require('../controllers/productsController')

    app.route('/products')
        .get(productList.listAllProducts)

    app.route('/products/:productId')
        .get(productList.readAProduct) 

}