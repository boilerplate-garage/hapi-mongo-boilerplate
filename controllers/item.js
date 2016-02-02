module.exports = {
  itemGetAllAction: function(request, reply) {
    return reply("GET /items");
  },

  itemGetOneAction: function(request, reply) {
    return reply("GET /items");
  },

  itemPostAction: function(request, reply) {
    return reply("POST /item");
  }
};
