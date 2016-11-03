'use strict';

const Glue   = require('glue');
const Dotenv = require('dotenv');
const Util   = require('util');
const routes = require('./routes.js');

Dotenv.config();

const manifest = {
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
    }, {
      plugin: {
        register: "good",
        options: {
          reporters: {
            console: [
              {
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [
                  {
                    response: '*',
                    log: '*'
                  }
                ]
              }, {
                module: 'good-console'
              },
              'stdout'
            ]
          }
        }
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
