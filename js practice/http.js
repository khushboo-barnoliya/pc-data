var http = require('http');
http.createServer(function (request, response) {
  response.writeHead("Hello");
  response.end();
}).listen(8066);

