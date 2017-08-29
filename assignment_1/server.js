var http = require('http'), 
    fs = require('fs'), 
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {
  var parsedUrl = url.parse(request.url);
  console.log(request.method)
  console.log(parsedUrl)
  if(parsedUrl.pathname == "/listings")
  {
        response.end(listingData)
  }
  else
  {     
        response.statusCode = 404
        response.end("Bad gateway error")
  }
};

fs.readFile('listings.json', 'utf8', function(err, data) {

    listingData = data;
    server = http.createServer(requestHandler);
    server.listen(port, function() {
      console.log('Server listening on: http://127.0.0.1:' + port);
    });
});