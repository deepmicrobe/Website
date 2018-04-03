var http = require('http');
var url = require('url'); //require url module

/*
Client generates requests, and the server responds
*/
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query; //parses request url
    var txt = q.year + " " + q.month; // checks url for year and month then returns
    res.end(txt);
}).listen(8080);
