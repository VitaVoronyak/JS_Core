var http = require('http');
var dt = require('./personalmodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time is currently: " + dt.myDateTime());
  res.end();
}).listen(8072);

console.log('Server running at http://127.0.0.1:8072/');