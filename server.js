const express = require("express");
const bodyParser = require("body-parser");
// const { process } = require("ipaddr.js");
const app = express();
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log("Application started and Listening on port: " + PORT);
});

// server css as static
app.use(express.static(__dirname +'/public'));

// get our app to use body parser 
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// app.post("/", (req, res) => {
//   var subName = req.body.yourname
//   var subEmail = req.body.youremail;
//   res.send("Hello " + subName + ", Thank you for subcribing. You email is " + subEmail);
// });