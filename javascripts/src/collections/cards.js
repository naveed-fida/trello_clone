var Backbone   = require('backbone')
  , Card       = require('../models/card');

var Cards = Backbone.Collection.extend({
  model: Card,
  url: "/list"
});

module.exports = Cards;