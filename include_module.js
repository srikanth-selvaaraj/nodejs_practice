var http = require('http');// to tranfer data
var dt = require('./node_module');

http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});// to display the response as html, 200 - means all is ok.
    res.write("the date is : "+ dt.myDateTime());
    res.end();
}).listen(8081);