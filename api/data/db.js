/*global console, require, module, process, express */
var mongoose = require("mongoose");
var User = require("../data/users.model.js");
var dburl = "mongodb://jmccommas:Monster2018@ds133621.mlab.com:33621/angular6-address-book";
var retry = null;
mongoose.connect(dburl);

// CONNECTION EVENTS
mongoose.connection.on("connected", function () {
    "use strict";
    console.log("Mongoose connected to " + dburl);
});
mongoose.connection.on("error", function (err) {
    "use strict";
    console.log("Mongoose connection error: " + err);
});
mongoose.connection.on("disconnected", function () {
    "use strict";
    console.log("Mongoose disconnected");
});

// CAPTURE APP TERMINATION / RESTART EVENTS
// To be called when process is restarted or terminated
function gracefulShutdown(msg, callback) {
    "use strict";
    mongoose.connection.close(function () {
        console.log("Mongoose disconnected through " + msg);
        callback();
    });
}

// For nodemon restarts
process.once("SIGUSR2", function () {
    gracefulShutdown("nodemon restart", function () {
        process.kill(process.pid, "SIGUSR2");
    });
});
// For app termination
process.on("SIGINT", function() {
    gracefulShutdown("App termination (SIGINT)", function () {
        process.exit(0);
    });
});
// For Heroku app termination
process.on("SIGTERM", function () {
    gracefulShutdown("App termination (SIGTERM)", function () {
        process.exit(0);
    });
});

// BRING IN YOUR SCHEMAS & MODELS
require("./contact.model");
mongoose.model("User");