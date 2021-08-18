// const express = require('express')
// const app = express()
// const path = require('path')

// app.use('/public', express.static(path.join(__dirname, '/public')))

// app.get('/', function(req, res){
//     var cv = path.join(__dirname, '/public/index.html')
//     res.sendFile(cv)
// })

// app.listen(3000, function(){
    
// })
// var http = require('http');
// var fs = require('fs');

// var server = http.createServer(function(req, res){
//     console.log('Request was made: ' + req.url);
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     var myReadStream = fs.createReadStream(__dirname + '/public/index.html', 'utf-8');
//     myReadStream.pipe(res);
// })

// server.listen(3000, '127.0.0.1');
// console.log("oke let's get started!!!")

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});

// server css as static
app.use(express.static(__dirname +'/public'));

// get our app to use body parser 
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  var subName = req.body.yourname
  var subEmail = req.body.youremail;
  res.send("Hello " + subName + ", Thank you for subcribing. You email is " + subEmail);
});