var Backbone    = require('backbone')
  , Cards       = require('../collections/cards');

var List = Backbone.Model.extend({
  defaults: {
    title: ""
  },

  parse(data) {
    this.cards = new Cards(data.cards);
    this.cards.list = this;
    return {
      title: data.title,
      id: List.generateId()
    };
  },

  initialize() {
  },

  toJSONWithCards() {
    var list = this.toJSON();
    list.cards = this.cards.toJSON();
    return list;
  }
});

List.last_id = 1;
List.generateId = function() {
  return this.last_id++;
}

module.exports = List;