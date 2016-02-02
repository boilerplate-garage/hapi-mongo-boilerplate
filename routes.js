var Joi = require("joi");

var root = require('./controllers/root.js');
var item = require('./controllers/item.js');

var routes = [
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
    handler: item.itemGetOneAction
  },
  {
    method:  'GET',
    path:    '/items',
    handler: item.itemGetAllAction
  }
];

module.exports = {
  setupRoutes: function(server) {
    routes.forEach(function(route) {
      server.route(route);
    });
  }
};
