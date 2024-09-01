



var http = require('http');

var data = require("./data");


http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'application\json'});
  // response.write({name: 'Khushboo', email: 'kb@gmail.com'});
  response.write(JSON.stringify(data));
  response.end();
}).listen(8055);
