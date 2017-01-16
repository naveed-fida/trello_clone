let Backbone    = require('backbone')
  , Cards       = require('../collections/cards');

let List = Backbone.Model.extend({
  defaults: {
    title: ""
  },

  parse(list) {
    this.cards = new Cards(list.cards, { list: this });
    this.cards.list = this;
    
    delete list.cards;
    list.id = list.id || this.collection.last_id++;
    return list;
  },

  initialize() {
  },

  toJSONWithCards() {
    let list = this.toJSON();
    list.cards = this.cards.toJSON();
    return list;
  }
});

module.exports = List;