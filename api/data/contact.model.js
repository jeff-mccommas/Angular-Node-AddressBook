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
    birthday: String,
    socialProfile: String,
    photoUrl: String
});

mongoose.model("Contact", contactSchema);