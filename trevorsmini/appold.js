var url = require('url');
var fs = require('fs');

function renderHTML(path, response) {
    fs.readFile(path, null, function(error,data){
        if(error){
            response.writeHead(404)
            response.write('file not found')
        } else {
            response.write(data);
        }
        response.end();
    });
}



module.exports = {
    handleRequest: function(request, response){
        response.writeHead(200, {'Content-Type':'text/html'});
        
        var path = url.parse(request.url).pathname;
        switch (path) {
            case '/':
                renderHTML('./index.html', response);
                console.log ('root page sent to port 8000');
                break;
            case '/constructionZone1':
                renderHTML('./constructionZone1.html', response);
                console.log('construction zone sent to port 8000')
                break;
            default:
            response.writeHead(404)
            response.write('file not found')
            response.end();
        }
    }
};