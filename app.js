'use strict';

var Glue   = require('glue');
var Dotenv = require('dotenv');
var Util   = require('util');
var routes = require('./routes.js');

Dotenv.config();

var manifest = {
  connections: [
    {
      host: process.env.HOST,
      port: process.env.PORT,
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
