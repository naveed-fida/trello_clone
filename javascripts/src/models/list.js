let Backbone    = require('backbone')
  , Cards       = require('../collections/cards');

let List = Backbone.Model.extend({
  defaults: {
    title: ""
  },

  parse(data) {
    this.cards = new Cards(data.cards);
    this.cards.list = this;
    return {
      title: data.title,
      id: data.id || this.collection.last_id++
    };
  },

  initialize() {
  },

  toJSONWithCards() {
    let list = this.toJSON();
    list.cards = this.cards.toJSON();
    return list;
  }
});

// List.last_id = 1;
// List.generateId = function() {
//   return this.last_id++;
// }

module.exports = List;