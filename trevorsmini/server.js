console.log ('created a server at port 8000')
var http = require('http');
var map = require('./map')
var tile = require('./tile')

function onRequest(request, response) {
    console.log ('local host 8000 is activated');
    response.writeHead(200, {'Content-type': 'text/plain'});
    response.write('Hello Zac!');
    map.createMap();
    tile.createTile();
    response.end();
}

http.createServer(onRequest).listen(8000);

