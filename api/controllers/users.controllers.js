/*global console, require, module */
var mongoose = require("mongoose");
var User = mongoose.model("User");
var bcrypt = require("bcrypt-nodejs");
var jwt = require("jsonwebtoken");

module.exports.register = function (req, res) {
    "use strict";
    console.log("registering user");

    var username = req.body.username;
    var name = req.body.name || null;
    var password = req.body.password;

    User.create({
        username: username,
        name: name,
        password: bcrypt.hashSync(password, bcrypt.genSaltSync(10))
    }, function (err, user) {
        if (err) {
            console.log(err);
            res.status(400).json(err);
        } else {
            res.format({
                'application/json': function () {
                    res.json(user);
                },
                'application/xml': function () {
                    res.type('application/xml');
                    res.send(xmlify(user));
                }
            });
        }
    });
};
module.exports.login = function (req, res) {
    "use strict";
    console.log("logging in user");
    var username = req.body.username;
    var password = req.body.password;

    User.findOne({
        username: username
    }).exec(function (err, user) {
        if (err) {
            console.log(err);
            res.status(400).json(err);
        } else {
            if (user && bcrypt.compareSync(password, user.password)) {
                var token = jwt.sign({
                    username: user.username
                }, "s3cr3t", {
                        expiresIn: 3600
                    });
                var response = {
                    success: true,
                    token: token,
                    username: user.username
                };
                res.format({
                    'application/json': function () {
                        res.json(response);
                    },
                    'application/xml': function () {
                        res.type('application/xml');
                        res.send(xmlify(response));
                    }
                });
            } else {
                res.status(401).json("Unauthorized");
            }
        }
    });
};
function getUser(req, res, next) {
    "use strict";
    User.findOne({
        username: req.user
    })
        .exec(function (err, doc) {
            var response = {};
            if (err) {
                console.log("Error finding contact");
                response.status = 500;
                response.data = err;
            } else if (!doc) {
                console.log("ContactId not found in database", id);
                response.status = 404;
                response.data = {
                    "data": "User ID not found " + id
                };
            } else {
                response.status = 200;
                response.data = doc;
            }
            res.format({
                'application/json': function () {
                    res.json(response);
                },
                'application/xml': function () {
                    res.type('application/xml');
                    res.send(xmlify(response));
                }
            });
        });

};

module.exports.authenticate = function (req, res, next) {
    "use strict";
    var headerExists = req.headers.authorization;
    if (headerExists) {
        var token = req.headers.authorization.split(" ")[1]; //--> Authorization Bearer xxx

        console.log(token);
        jwt.verify(token, "s3cr3t", function (error, decoded) {
            if (error) {
                console.log(error);
                res.status(401).json("Unauthorized");
            } else {
                req.user = decoded.username;
                getUser(req, res, next);
            }
        });
    } else {
        res.status(403).json("No token provided");
    }
};
module.exports.userUpdate = function (req, res) {
    var userid = req.params.userid;
    User.update({
        _id: userid
    }, {
            $set: {
                phone: req.body.phone
            }
        }, function () {
            res.status(200)
                .json(true);
        });
};