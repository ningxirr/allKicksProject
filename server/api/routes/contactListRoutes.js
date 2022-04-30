'use strict'
module.exports = function(app){
    var contactList = require('../controllers/contactListController')

    app.route('/contacts')
        .get(contactList.showAllContact)
        .post(contactList.addNewContact)

    app.route('/contacts/:contactId')
        .get(contactList.showOneContact)
        .post(contactList.addContactHistory)
        // .post(contactList.editAContact)
        /*.delete(contactList.deleteAContact) */

    app.route('/contacts/email/:contactEmail')
            .get(contactList.showOneContactByEmail)
    /* app.route('/contacts/:contactId/:productId')
        .post(contactList.addContactHistory) */
}