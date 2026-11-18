const express = require("express")
const mongoose = require("mongoose")

const Bruker = require("./models/Bruker");

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

    const brukere = new Bruker({email});
    await brukere.save()

    if (eksisterBruker) {
            console.log("hei")
        }

        const bruker = new Bruker({ email });
        await bruker.save();
})

app.post("/adminside", (req,res)=>{
    
})

app.listen(4002)