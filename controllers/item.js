var Boom = require('boom');

var mongoConnect = function(req, collectionName) {
  var db = req.server.plugins['hapi-mongodb'].db;
  return db.collection(collectionName);
}

module.exports = {
  itemGetAllAction: function(request, reply) {
    var db = mongoConnect(request, "items");

    db.find().toArray(function(err, doc) {
      return reply(doc);
    });

    console.log("GET /items");
  },

  itemGetOneAction: function(request, reply) {
    var db = mongoConnect(request, "items");

    console.log("GET /item/" + request.params.id);

    return reply("GET /item/{id}");
  },

  itemPostAction: function(request, reply) {
    var db = mongoConnect(request, "items");
    var payload = {
      name: request.payload.name,
      description: request.payload.name
    }

    db.insert(payload, { w: 1 }, function(err, doc) {
      if (err) {
        return reply(Boom.notImplemented("Internal Server Error"));
      }
      return reply(doc);
    });

    console.log("POST /item");
  }
};
