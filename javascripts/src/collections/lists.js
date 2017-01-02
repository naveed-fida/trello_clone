var Backbone    = require('backbone')
  , List        = require('../models/list');

var Lists = Backbone.Collection.extend({
  model: List,
});

module.exports = Lists;