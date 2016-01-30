'use strict';

var Glue = require('glue');
var Dotenv = require('dotenv');
var routes = require('./routes.js');

var manifest = {
  connections: [
    {
      host: 'localhost',
      port: 8000,
      labels: ['web']
    }
  ],
  registrations: [
    {
      plugin: {
        register: 'hapi-mongodb',
        options: {}
      }
    }
  ]
};

Glue.compose(manifest, {}, function(err, server) {
  if (err) throw err;
  routes.setupRoutes(server);
  server.start(function(err) {
    if (err) throw err;
    console.log("Server running at: " + server.info.uri);
  });
});
