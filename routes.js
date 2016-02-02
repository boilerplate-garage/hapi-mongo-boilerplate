var root = require('./controllers/root.js');
var user = require('./controllers/user.js');
var item = require('./controllers/item.js');

var routes = [
  {
    method:  'GET',
    path:    '/',
    handler: root.rootGetAction
  },
  {
    method:  'GET',
    path:    '/items',
    handler: item.itemGetAction
  }
];

module.exports = {
  setupRoutes: function(server) {
    routes.forEach(function(route) {
      server.route(route);
    });
  }
};
