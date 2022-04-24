'use strict'
module.exports = function(app){
    var contactList = require('../controllers/contactListController')

    app.route('/contacts')
        .get(contactList.showAllContact)
        .post(contactList.addNewContact)

    app.route('/contacts/:contactEmail')
        .get(contactList.showOneContact)
        .post(contactList.editAContact)
        /*.delete(contactList.deleteAContact) */
}