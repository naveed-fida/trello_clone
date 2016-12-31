let Backbone = include('backbone');

let Card = Backbone.Model.extend({
  defaults: {
    title: "A Card",
    description: "",
    labels: [],
    due_date: undefined
  },

  constructor() {
    Backbone.Model.apply(this, arguments);
    this.set('order', this.collection.nextOrder());
  }
});

module.exports = Card;