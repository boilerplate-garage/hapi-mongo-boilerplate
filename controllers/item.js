module.exports = {
  itemGetAction: function(request, reply) {
    return reply("GET /items");
  },

  itemPostAction: function(request, reply) {
    return reply("POST /item");
  }
};
