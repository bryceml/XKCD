var fs = require('fs');
var http = require('http');
var https = require('https');
var url = require('url');
//var ROOT_DIR = ".";
http.createServer(function(req, res) {
  var urlObj = url.parse(req.url, true, false);
  //console.log("opening" + ROOT_DIR + urlObj.pathname);
  //console.log(urlObj);
  //if (urlObj.pathname == "/getxkcd") {
    //console.log("In REST SERVICE")
    https.get("https://xkcd.com/" + urlObj.query["q"] + "info.0.json", function(response) {
      response.setEncoding('utf8')
      response.on('data', function(d) {
	try{
	res.setHeader("Content-Type", "application/json");
	res.writeHead(200);
        res.end(d);
	}
	catch(e){}
	});
      //response.on('end', function() {
      //  res.end();
      //});
    })//.on('error', function(e) {
      //console.log("Got error: " + e.message);
      //res.write("error");
      //res.end();
    //});


 // } else {
 //   res.writeHead(404);
 //   res.end("Not Found");
 // }
}).listen(12894);
