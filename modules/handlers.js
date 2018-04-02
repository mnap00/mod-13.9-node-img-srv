var fs = require('fs');
var formidable = require('formidable');

exports.upload = function(request, response) {
    console.log('Handling upload request...');
    var form = new formidable.IncomingForm();
    form.parse(request, function(error, fields, files) {
        fs.renameSync(files.upload.path, 'test.png');
        response.writeHead(200, {'Content-Type': 'text-html'});
        response.write('Received image:<br/>');
        response.write('<img src="/show" />');
        response.end();
    });
}

exports.welcome = function(request, response) {
    console.log('Handling welcome request...');
    fs.readFile('templates/start.html', function(err, html) {
        response.writeHead(200, {'Content-Type': 'text-html; charset=utf-8'});
        response.write(html);
        response.end();
    });
}

exports.error = function(request, response) {
    console.log('I don\'t know what to do...');
    response.write('404 :\(');
    response.end();
}
