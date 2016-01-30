var routes = [
  {
    method:  'GET',
    path:    '/',
    handler: function(request, reply) {
      reply("/");
    }
  },
  {
    method:  'GET',
    path:    '/users',
    handler: function(request, reply) {
      return reply("/users");
    }
  },
  {
    method:  'GET',
    path:    '/items',
    handler: function(request, reply) {
      return reply("/items");
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
