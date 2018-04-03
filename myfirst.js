var http = require('http');
// ./ means that module is located in the same folder as this file
var dt = require('./myfirstmodule');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currentlyeai;o: " + dt.myDateTime());
    res.end();
}).listen(8080);
