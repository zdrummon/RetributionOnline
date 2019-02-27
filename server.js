var http = require('http');
var serverRouter = require('./serverRouter');

console.log('server started, waiting for requests');
http.createServer(serverRouter.handleRequest).listen(8000);
