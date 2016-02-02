var mongoConnect = function(req, collectionName) {
  var db = req.server.plugins['hapi-mongodb'].db;
  return db.collection(collecitonName);
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

    console.log("POST /item");

    return reply("POST /item");
  }
};
