var Backbone    = require('backbone')
  , Cards       = require('../collections/cards');

var List = Backbone.Model.extend({
  defaults: {
    title: ""
  },

  parse(data) {
    this.cards = new Cards(data.cards);
    return { title: data.title };
  },

  initialize() {
  }
});

module.exports = List;