const Boom = require('boom');

const mongoConnect = function(req, collectionName) {
  const db = req.server.plugins['hapi-mongodb'].db;
  return db.collection(collectionName);
}

module.exports = {
  itemGetAllAction: function(request, reply) {
    const db = mongoConnect(request, "items");
    db.find().toArray(function(err, doc) {
      return reply(doc);
    });
  },

  itemGetOneAction: function(request, reply) {
    const db = mongoConnect(request, "items");
    return reply("GET /item/{id}");
  },

  itemPostAction: function(request, reply) {
    const db = mongoConnect(request, "items");
    const payload = {
      name: request.payload.name,
      description: request.payload.name
    }

    db.insert(payload, { w: 1 }, function(err, doc) {
      if (err) {
        return reply(Boom.notImplemented("Internal Server Error"));
      }
      return reply(doc);
    });
  }
};
