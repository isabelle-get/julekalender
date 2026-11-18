const mongoose = require("mongoose")

const questionSchema = mongoose.Schema({
    number: Number,
    file: String,
    text: String,

    
})

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;