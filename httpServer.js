var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
<<<<<<< HEAD
  res.end('Hello World from aakarshee');
}).listen(3020);
=======
  res.end('Hello World!');
}).listen(3020);
>>>>>>> 4c5b1b84b592133d252a0c441fad13e28952c670
