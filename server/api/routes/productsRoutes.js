'use strict'
module.exports = function(app){
    var productList = require('../controllers/productsController')

    app.route('/products') //share paths (seperate method/action)
        .get(productList.listAllProducts) //func. read all user 
        // .post(userList.createAUser) //create a user

    app.route('/products/:productId')
        .get(productList.readAProduct) //read a user
        // .delete(userList.deleteAUser) //delete a user
        // .post(userList.updateAUser) //update a user
}