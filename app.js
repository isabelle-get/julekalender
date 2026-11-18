const express = require("express")
const mongoose = require("mongoose")

const app = express();
app.use(express.static("public"));
mongoose.connect('mongodb://localhost:27017/julekalender');

app.use(express.urlencoded({ extended: true }));

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

app.get("/julekalender/:id/", (req, res) => {
    console.log("req query", req.params)
    const id = req.params.id;
    res.render("adminside");
})

app.post("/bruker", async (req,res)=>{
    const {email} = req.body

    console.log( `${email}`)
    
    
    const eksisterBruker = await Bruker.findOne({ email });
    await brukere.save()
    const brukere = new Bruker({
        email
    });

    if({email}.endsWith("@afk.no")){
        console.log("yes")
    }else{
        console.log("no")
    }


})

app.listen(4002)