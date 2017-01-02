var Backbone = require('backbone');

var Card = Backbone.Model.extend({
  defaults: {
    title: "A Card",
    description: "",
    labels: [],
    due_date: undefined
  }
});

module.exports = Card;