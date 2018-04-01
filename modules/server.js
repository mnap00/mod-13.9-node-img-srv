var http = require('http');
var colors = require('colors');

function start() {
    function onRequest(request, response) {
        console.log('Got request.');
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write('The first pancake is always spoiled');
        response.end();
    }
    http.createServer(onRequest).listen(9000);
    console.log('Server running!'.green);
}

exports.start = start;
