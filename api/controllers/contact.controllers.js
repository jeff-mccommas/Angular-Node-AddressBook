/*global console, require, module, express */
var mongoose = require("mongoose");
var Contact = mongoose.model("Contact");

module.exports.contactGetAll = function (req, res) {
    "use strict";
    console.log("GET the contacts");
    console.log(req.query);

    var offset = 0;
    var count = 5;
    var maxCount = 50;

    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset, 10);
    }

    if (req.query && req.query.count) {
        count = parseInt(req.query.count, 10);
    }

    if (isNaN(offset) || isNaN(count)) {
        res
            .status(400)
            .json({
                "message": "If supplied in querystring, count and offset must both be numbers"
            });
        return;
    }

    if (count > maxCount) {
        res
            .status(400)
            .json({
                "message": "Count limit of " + maxCount + " exceeded"
            });
        return;
    }

    Contact
        .find()
        .skip(offset)
        .limit(count)
        .exec(function (err, contacts) {
            console.log(err);
            console.log(contacts);
            if (err) {
                console.log("Error finding contacts");
                res
                    .status(500)
                    .json(err);
            } else {
                console.log("Found contacts", contacts.length);
                res
                    .json(contacts);
            }
        });

};

module.exports.contactGetOne = function (req, res) {
    "use strict";
    var id = req.params.contactId;

    console.log("GET contactId", id);

    Contact
        .findById(id)
        .exec(function (err, doc) {
            var response = {
                status: 200,
                message: doc
            };
            if (err) {
                console.log("Error finding contact");
                response.status = 500;
                response.message = err;
            } else if (!doc) {
                console.log("ContactId not found in database", id);
                response.status = 404;
                response.message = {
                    "message": "Contact ID not found " + id
                };
            }
            res
                .status(response.status)
                .json(response.message);
        });

};

var _splitArray = function (input) {
    "use strict";
    var output;
    if (input && input.length > 0) {
        output = input.split(";");
    } else {
        output = [];
    }
    return output;
};

module.exports.contactAddOne = function (req, res) {
    "use strict";
    console.log("POST new hotel");
    var contactCreateObj = {
        name: req.body.name,
        description: req.body.description
    };
    Contact
        .create(contactCreateObj, function (err, contact) {
            if (err) {
                console.log("Error creating contact");
                res
                    .status(400)
                    .json(err);
            } else {
                console.log("Contact created!", contact);
                res
                    .status(201)
                    .json(contact);
            }
        });

};


module.exports.contactUpdateOne = function (req, res) {
    var contactId = req.params.contactId;
    Contact.update({
        _id: contactId
    }, {
        $set: {
          photoUrl: req.body.photos
        }
    }, function () {
        console.log("Contact updatedImage");
    });
};

module.exports.addContactImage = function (contactId, url) {
    Contact.update({
        _id: contactId
    }, {
        $set: {
          photoUrl: url
        }
    }, function (err, hotelUpdated) {
        console.log("Contact maped with FileUploaded");
    });
};

module.exports.contactDeleteOne = function (req, res) {
    "use strict";
    var contactId = req.params.contactId;
    Contact
        .findByIdAndRemove(contactId)
        .exec(function (err) {
            if (err) {
                res
                    .status(404)
                    .json(err);
            } else {
                console.log("Contact deleted, id:", contactId);
                res
                    .status(204)
                    .json();
            }
        });
};