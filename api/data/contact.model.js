/*global console, require, module, express */
var mongoose = require("mongoose");

var contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: String,
    phone: [Number],
    email: [String],
    photoUrl: String
});

mongoose.model("Contact", contactSchema);