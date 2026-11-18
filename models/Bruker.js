const mongoose = require("mongoose")

const brukerSchema = mongoose.Schema({
    email: {
        type: String,
        match: /.+@afk\.no$/,
    }

});

const user = mongoose.model("user", brukerSchema)

module.exports = user;