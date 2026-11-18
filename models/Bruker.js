const mongoose = require("mongoose")

const userSchema2 = mongoose.Schema({
    email: {
        type: String,
        match: /.+@afk\.no$/,
    }

});

const user = mongoose.model("user", userSchema2)

module.exports = user