let Backbone   = require('backbone')
  , Card       = require('../models/card');

let Cards = (function() {
  let last_id = 0;

  let Cards = Backbone.Collection.extend({
    model: Card,
    url: "/list",

    nextOrder() {
      this.length ? this.last().get('order') + 1 : 1;
    },

    nextId() {
      return last_id++;
    }
  });

  return Cards;
})();