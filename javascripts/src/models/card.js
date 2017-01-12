var Backbone = require('backbone');

var Card = Backbone.Model.extend({
  defaults: {
    title: "A Card",
    labels: [],
    due_date: undefined,
    description: '',
    comments: []
  },

  addComment(comment) {
    this.get('comments').push(comment);
    this.trigger('comment_added');
  }
});


module.exports = Card;