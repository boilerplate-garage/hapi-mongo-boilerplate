const Boom = require('boom');

module.exports = {
  itemGetAllAction: function(req, reply) {
    req.pre.db('items').find().toArray(function(err, doc) {
      return reply(doc);
    });
  },

  itemGetOneAction: function(req, reply) {
    return reply("GET /item/{id}");
  },

  itemPostAction: function(req, reply) {
    const payload = {
      name: request.payload.name,
      description: request.payload.name
    }

    req.pre.db('items').insert(payload, { w: 1 }, function(err, doc) {
      if (err) {
        return reply(Boom.notImplemented("Internal Server Error"));
      }
      return reply(doc);
    });
  }
};
