const mongoose = require("mongoose")

const userSchema2 = mongoose.Schema({
    email: String,
    // role: {
    //     type: String,
    //     enum:["admin", "kunde"],
    //     default: "kunde",
    //     required: true
    // }
})

const user = mongoose.model("user", userSchema)

module.exports = user