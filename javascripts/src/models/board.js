var Backbone     = require('backbone')
  , Lists        = require('../collections/lists');

var Board = Backbone.Model.extend({
  defaults: {
    title: "A board"
  },

  parse(attrs) {
    this.lists = new Lists(attrs.lists, { parse: true });
    return {
      title: attrs.title
    };
  },

  initialize() { 
  }
});

module.exports = Board;