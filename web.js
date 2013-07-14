var express = require('express');
var fs = require('fs')
var htmlfile = "index.html";

var app = express.createServer(express.logger());

app.get('/', function(req, res){
  var html = fs.readFieSync(htmlfile).toString();
  res.send(html);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});