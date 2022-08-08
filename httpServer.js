var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end("hello everyone, you're welcome to use my service, I hope you like it");
}).listen(3020);
