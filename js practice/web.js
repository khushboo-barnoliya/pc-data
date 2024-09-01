var http = require('http');


http.createServer(function(request,response){
  response.writeHead(200, {'Content-Type' : 'text/plain'});
  response.end("hello, this is a pen!");
}).listen(5050);