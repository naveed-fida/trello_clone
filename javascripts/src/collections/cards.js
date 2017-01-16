let Backbone   = require('backbone')
  , Card       = require('../models/card');

let Cards = Backbone.Collection.extend({
  model: Card,

  initialize(cards, options) {
    this.list = options.list;
  },

  changePosition(card, new_pos) {
    this.remove(card, { silent: true });
    this.add(card, { at: new_pos, silent: true });
  }
});

module.exports = Cards;