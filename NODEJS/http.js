








const http = require("http");

http.createServer((request, response) => {
  response.write("Hello");
  response.end();
}).listen(5005);
