'use strict';

var Hapi = require('hapi');
var routes = require('./routes.js');

var server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 8000
});

routes.setupRoutes(server);

server.start(function(err) {
  if (err) throw err;
  console.log("Server running at: " + server.info.uri);
});
