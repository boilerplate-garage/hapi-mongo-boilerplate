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
    handler: item.itemPostAction
  },
  {
    method:  'POST',
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
