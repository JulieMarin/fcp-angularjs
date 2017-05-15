/////////* index.js *////////////
  var express = require('express');
  var http    = require('http');
  var server = express();

  server.set('port', (process.env.PORT || 5000));

  // log all requests to the console
  server.use(express.static('build'));

  // Serve index.html for all routes to leave routing up to Angular
  server.all('/*', function(req, res) {
      res.sendFile('index.html', { root: 'build' });
  });

  // Start webserver if not already running
  var s = http.createServer(server);
  s.on('error', function(err){
    if(err.code === 'EADDRINUSE'){
      gutil.log('Development server is already started at port ' + server.get('port'));
    }
    else {
      throw err;
    }
  });

  s.listen(server.get('port'), function() {
    console.log('Node app is running on port', server.get('port'));
    });
