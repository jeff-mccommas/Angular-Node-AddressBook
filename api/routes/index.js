/*global console, require, module, express */
var express = require("express");
var router = express.Router();
var ctrlUsers = require("../controllers/users.controllers.js");
var ctrlContact = require("../controllers/contact.controllers.js");

// Authentication
//http://localhost:3000/api/users/register
router
    .route("/users/register")
    .post(ctrlUsers.register);
router
    .route("/users/login")
    .post(ctrlUsers.login);
router
    .route("/users/:userid")
    .post(ctrlUsers.userUpdate);
router.route("/auth")
    .get(ctrlUsers.authenticate);
router
    .route('/contacts')
    .get(ctrlContact.contactGetAll)
    .post(ctrlContact.contactAddOne);
router
    .route('/contacts/:contactId')
    .get(ctrlContact.contactGetOne)
    .post(ctrlContact.contactUpdateOne)
    .delete(ctrlContact.contactDeleteOne);

/* GET home page. */

module.exports = router;