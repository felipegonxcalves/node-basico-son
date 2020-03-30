console.log('Hello World');
var http = require('http'); // API NATIVA DO NODE
var handle = require('./handle');

// function handle(request, response) {
//     response.writeHead(200, {
//        'Content-type' : 'text/html'
//     });
//
//     response.write('<!DOCTYPE "html">');
//     response.write('<html>');
//     response.write('<head><title>Http module</title></head>');
//     response.write('<body>');
//     response.write('<h1>Hello from http module FETECNO</h1>');
//     response.write('</body>');
//     response.write('</html>');
//     response.end();
//
// }

var server = http.createServer(handle);

server.listen(3000, function() {
    console.log('Server is listening at port 3000');
});

