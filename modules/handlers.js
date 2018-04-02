exports.upload = function(request, response) {
    console.log('Handling upload request...');
    response.write('Begin upload!');
    response.end();
}

exports.welcome = function(request, response) {
    console.log('Handling welcome request...');
    response.write('Welcome to the start page!');
    response.end();
}

exports.error = function(request, response) {
    console.log('I don\'t know what to do...');
    response.write('404 :\(');
    response.end();
}
