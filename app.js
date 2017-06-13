/**
 * Created by rr245546 on 6/12/2017.
 */
console.log(' am i here ?? ');
var http = require('http');
var port = process.env.port || 3000;
console.log(' port ' + port );


http.createServer(onRequest).listen( port );

function onRequest(request, response) {
    console.log(' on request ');
    response.writeHead(200);
    response.write('Chintan Shah');
    response.end();
}