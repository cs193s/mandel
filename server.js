var fs = require('fs');
var mandel = fs.readFileSync('mandel/mandel.html', 'utf8');
var http = require('http');
var handleRequest = function(request, response) {
  response.writeHead(200);
  response.end(mandel);
}
var www = http.createServer(handleRequest);
www.listen(8080);
