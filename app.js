const express = require("express");
const mongoose = require("mongoose");

const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const Bruker = require("./models/Bruker");

const app = express();
app.use(express.static("public"));
mongoose.connect("mongodb://localhost:27017/julekalender");

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(cookieParser())

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/interactive", (req,res) =>{

    res.render("interactive")
})

app.get("/bruker", (req, res) => {
  console.log(req.cookies);

  if (req.cookies.user) {
    res.redirect("/");
  } else {
    res.render("bruker");
  }
  res.render("bruker")
});

app.get("/adminside", async (req, res) => {
    console.log("rerere", req.cookies)
  const userId = req.cookies.user;

  const decoded = await jwt.decode(userId);
  console.log(decoded);
  const user =await Bruker.findOne({ _id: decoded.userId });

  console.log(user);
if(user.email === "monicastef@afk.no") {
    res.render("adminside");

} else {
    res.redirect("/")
}
});

app.get("/julekalender/:id/", (req, res) => {
  console.log("req query", req.params);
  const id = req.params.id;
});

app.post("/bruker", async (req, res) => {
  const { email } = req.body;

  console.log(`${email}`);

  const eksisterBruker = await Bruker.findOne({ email });

  if (eksisterBruker) {
    console.log("brukeren finnes allerede");
    res.send("brukeren finnes allerede");
  }

  const bruker = new Bruker({ email });
  await bruker.save();

  const jwtToken = jwt.sign({ userId: bruker._id }, "MonicaerBest");

  res.cookie("user", jwtToken, { maxAge: 30 * 24 * 60 * 60 * 1000 });

  res.redirect("/");
});

app.post("/adminside", (req, res) => {});

app.listen(4002);
