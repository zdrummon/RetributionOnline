var url = require('url');
var fs = require('fs');

var pingCounter = require('./pingCounter');

function renderHTML(path, response) {
    fs.readFile(path, null, function(error, data) {
        if (error) {
            response.writeHead(404);
            response.write("file not found!");
        } else {
            response.write(data);
        }
        response.end();
    });
}

module.exports = {
    handleRequest: function(request, response) {
        pingCounter.pingCount();
        console.log('server request being routed');
        response.writeHead(200, {'Content-Type': 'text/html'});

        var path = url.parse(request.url).pathname;
        switch (path) {
            case '/':
                console.log('routing to index');
                renderHTML('./index.html', response);
                break;
            case '/testRoute':
                console.log('routing to a testing subpage (also git test)');
                renderHTML('./testRoute.html', response);
                break;
            default:
                console.log('failure to route');
                response.writeHead(404);
                response.write("route not defined");
                response.end();
        } 
    }
};
