console.log ('created a server at port 8000');
var http = require('http');
var map = require('./map');
var tile = require('./tile');
var fs = require('fs');


function onRequest(request, response) {
    console.log ('local host 8000 is accessed');
    response.writeHead(200, {'Content-type': 'text/html'});
    fs.readFile('./index.html', null, function(error,data){
        if(error){
            response.writeHead(404)
            response.write('file not found')
        } else {
            response.write(data);
        }
        response.end();
    });
 
}

http.createServer(onRequest).listen(8000);

