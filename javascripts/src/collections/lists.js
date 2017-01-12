var Backbone    = require('backbone')
  , List        = require('../models/list');

var Lists = Backbone.Collection.extend({
  model: List,

  toJSONAll() {
    var lists = [];
    this.models.forEach(model => {
      lists.push(model.toJSONWithCards());
    });

    return lists;
  }
});

module.exports = new Lists();