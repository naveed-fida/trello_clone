var Backbone    = require('backbone')
  , Board       = require('../models/board');


var Boards = Backbone.Collection.extend({
  model: Board
});

module.exports = Boards;