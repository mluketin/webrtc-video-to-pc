var static = require('node-static');

var publicPath = "public";

var file = new static.Server(publicPath);

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response);
    }).resume();
}).listen(8000);
