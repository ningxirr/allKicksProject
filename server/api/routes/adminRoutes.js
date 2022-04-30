'use strict'
module.exports = function(app){
    var admin = require('../controllers/adminController')

    app.route('/admin/:email/:password')
        .get(admin.checkAdmin)
    
    app.route('/admin/:productObj')
        .post(admin.addProduct)
}