console.log ('created a server at port 8000');
var http = require('http');
var app = require('./app')

http.createServer(app.handleRequest).listen(8000);

