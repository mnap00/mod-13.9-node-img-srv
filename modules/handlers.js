var fs = require('fs');
var formidable = require('formidable');

exports.upload = function(request, response) {
    console.log('Handling upload request...');
    var form = new formidable.IncomingForm();
    form.uploadDir = './temporary';
    form.parse(request, function(error, fields, files) {
        fs.renameSync(files.upload.path, './images/' + files.upload.name);
        fs.readFile('templates/upload.html', function(err, html) {
            response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            response.write(html);
            response.end();
        });
    });
}

exports.show = function(request, response) {
    fs.readFile('images/cat.jpg', 'binary', function(error, file) {
        response.writeHead(200, {'Content-Type': 'image/jpeg'});
        response.write(file, 'binary');
        response.end();
    });
}

exports.style = function(request, response) {
    fs.readFile('styles/main.css', function(err, css) {
        response.writeHead(200, {'Content-Type': 'text/css; charset=utf-8'});
        response.write(css);
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
