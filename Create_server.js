var http = require('http');

var hostname = '127.0.0.1';
var port = 3000;

var server = http.createServer(function (_req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World sss');
});
  server.listen(port, hostname, function () {
    console.log(`Server running at http://${hostname}:${port}/`); // Use backticks consistently
  });