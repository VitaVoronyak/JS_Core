let http = require("http");
let os = require('os');
let path = require('path');

http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/plain'});
    let text = 'System information';
    let ut_sec = os.uptime();
    let ut_min = ut_sec/60; 
    let path1 = __filename;

   response.write(
`${text}

Current user name: ${os.userInfo().username}
OS type: ${os.type()}
System work time: ${ut_min}
Current work directory: ${path.dirname(path1)}
Server file name: ${path.basename(path1)}`);

   response.end();
}).listen(5000);

console.log('Server running at http://127.0.0.1:5000/');