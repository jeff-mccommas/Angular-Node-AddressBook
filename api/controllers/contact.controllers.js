/*global console, require, module, express */
var mongoose = require("mongoose");
var Contact = mongoose.model("Contact");
var xmlify = require("xmlify");
module.exports.contactGetAll = function (req, res) {
    "use strict";
    console.log("GET the contacts");
    Contact
        .find()
        .exec(function (err, contacts) {
            if (err) {
                console.log("Error finding contacts");
                res
                    .status(500)
                    .json(err);
            } else {
                res.format({
                    'application/json': function () {
                        res.json(contacts);
                    },
                    'application/xml': function () {
                        res.type('application/xml');
                        res.send(xmlify(contacts));
                    }
                });
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
            res.format({
                'application/json': function () {
                    res.json(response.message);
                },
                'application/xml': function () {
                    res.type('application/xml');
                    res.send(xmlify(response.message));
                }
            });
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
    var contactCreateObj = req.body;
    Contact
        .create(contactCreateObj, function (err, contact) {
            if (err) {
                console.log("Error creating contact");
                res
                    .status(400)
                    .json(err);
            } else {
                res.format({
                    'application/json': function () {
                        res.json(contact);
                    },
                    'application/xml': function () {
                        res.type('application/xml');
                        res.send(xmlify(contact));
                    }
                });
            }
        });
};


module.exports.contactUpdateOne = function (req, res) {
    var contactId = req.params.contactId;
    Contact.update({
        _id: contactId
    }, {
            $set: {
                name: req.body.name,
                address: req.body.address,
                phone: req.body.phone,
                email: req.body.email,
                birthday: req.body.birthday,
                socialProfile: req.body.socialProfile,
                photoUrl: req.body.photoUrl,
            }
        }, function () {
            res
                .status(200)
                .json(true);
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