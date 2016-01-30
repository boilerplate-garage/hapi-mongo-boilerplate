'use strict';

var Hapi = require('hapi');
var Dotenv = require('dotenv');
var Mongoose = require('mongoose');

var server = new Hapi.Server();
var config = {
  host: 'localhost',
  port: 8000
}

server.connection(config);
server.start(function(err) {
  if (err) {
    throw err;
  }
  console.log("Server running at: " + server.info.uri);
});
