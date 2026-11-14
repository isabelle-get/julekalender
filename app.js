const express = require("express")
const mongoose = require("mongoose")

const app = express();
app.use(express.static("public"));

app.set('view engine', 'ejs' )

app.get("/", (req,res)=>{
    res.render("index")
})

app.get("/bruker", (req,res)=>{
    res.render("bruker")
})

app.get("/adminside", (req,res)=>{
    res.render("adminside")
})

app.listen(4002)