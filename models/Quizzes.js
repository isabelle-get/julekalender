const mongoose = require("mongoose");


const quizzesSchema = mongoose.Schema({});


const quizzes = mongoose.model("Quizzes", quizzesSchema);


module.exports = quizzes;