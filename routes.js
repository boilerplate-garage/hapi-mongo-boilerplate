const Joi = require("joi");

const root = require('./controllers/root.js');
const item = require('./controllers/item.js');

const dbConnector = {
  assign: 'db',
  method: function(req, reply) {
    reply(function(collectionName) {
      const db = req.server.plugins['hapi-mongodb'].db;
      return db.collection(collectionName);
    });
  }
};

const routes = [
  {
    method:  'GET',
    path:    '/',
    handler: root.rootGetAction
  },
  {
    method:  'POST',
    path:    '/item',
    handler: item.itemPostAction,
    config: {
      pre: [dbConnector],
      validate: {
        payload: {
          name: Joi.string(),
          description: Joi.string()
        }
      }
    }
  },
  {
    method:  'GET',
    path:    '/item/{id}',
    handler: item.itemGetOneAction,
    config: {
      pre: [dbConnector]
    }
  },
  {
    method:  'GET',
    path:    '/items',
    handler: item.itemGetAllAction,
    config: {
      pre: [dbConnector]
    }
  }
];

module.exports = {
  setupRoutes: function(server) {
    routes.forEach(function(route) {
      server.route(route);
    });
  }
};
