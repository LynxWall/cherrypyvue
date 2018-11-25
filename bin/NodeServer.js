var static = require('node-static');

//
// Create a node-static server instance to serve the './public' folder
//
var file = new static.Server('./public/dist');

require('http')
    .createServer(function(request, response) {
        request
            .addListener('end', function() {
                //
                // Serve files!
                //
                file.serve(request, response);
            })
            .resume();
    })
    .listen(8000);

console.log('> node-static is listening on http://127.0.0.1:8000');
