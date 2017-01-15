let Backbone   = require('backbone')
  , Card       = require('../models/card');

let Cards = Backbone.Collection.extend({
  model: Card,

  changePosition(card, new_pos) {
    this.remove(card, {silent: true});
    this.add(card, {at: new_pos, silent: true});
  }
});

module.exports = Cards;