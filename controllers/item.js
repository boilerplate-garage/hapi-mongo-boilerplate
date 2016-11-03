const Boom = require('boom');

module.exports = {
  itemGetAllAction: function(req, reply) {
    req.pre.db('items').find().toArray(function(err, doc) {
      return reply(doc);
    });
  },

  itemGetOneAction: function(req, reply) {
    const ObjectID = req.server.plugins['hapi-mongodb'].ObjectID;

    req.pre.db('items').findOne({ _id: new ObjectID(req.params.id) }, function(err, doc) {
      if (err) {
        return reply(Boom.notImplemented("Internal Server Error"));
      }
      return reply(doc);
    });
  },

  itemPostAction: function(req, reply) {
    const payload = {
      name: re.payload.name,
      description: req.payload.name
    }

    req.pre.db('items').insert(payload, { w: 1 }, function(err, doc) {
      if (err) {
        return reply(Boom.notImplemented("Internal Server Error"));
      }
      return reply(doc);
    });
  }
};
