let Backbone = require('backbone');

let Card = Backbone.Model.extend({
  defaults: {
    title: "A Card",
    labels: [],
    due_date: undefined,
    description: '',
    comments: []
  },

  addComment(comment) {
    this.get('comments').push(comment);
    this.trigger('change_comments');
  },

  addLabel(label) {
    this.get('labels').push(label);
    this.trigger("change_labels");
  },

  removeLabel(label) {
    this.set('labels', this.get('labels').filter(lbl => lbl !== label));
    this.trigger('change_labels');
  }
});


module.exports = Card;