/*global console, require, module, express */
var express = require("express");
var router = express.Router();
var multer = require("multer");

var ctrlUsers = require("../controllers/users.controllers.js");
var ctrlContact = require("../controllers/contact.controllers.js");

// Authentication
router
    .route("/users/register")
    .post(ctrlUsers.register);

router
    .route("/users/login")
    .post(ctrlUsers.login);
router
    .route('/contacts')
    .get(ctrlContact.contactGetAll)
    .post(ctrlContact.contactAddOne);

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        "use strict";
        cb(null, "./uploads/images");
    },
    filename: function (req, file, cb) {
        "use strict";
        cb(null, Date.now() + ".jpg");
    }
});
//1) To save image to a sever
//2) To link that image with hotel
// we need hotelId and Filename
//define the type of upload multer would be doing and pass in its destination, in our case, its a single file with the name photo
var upload = multer({
    storage: storage
});

router.post("/upload", upload.single("photo"), function (req, res) {
    "use strict";
    var path = req.file.path;
    var referrer = req.header("Referer").split("/");
    var hotelId = referrer[referrer.length - 1];
    ctrlHotels.addHotelImage(hotelId, path);
    return res.send(path);
});
/* GET home page. */

module.exports = router;